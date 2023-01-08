import { existsSync } from 'fs'
import { join } from 'path'
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	integrations: [tailwind()],
	markdown: {
		remarkPlugins: [defaultLayoutPlugin],
		extendDefaultPlugins: true,
	},
})

const pagesPath = 'src/pages'
const layoutPath = 'layouts'
const defaultLayout = 'Main'

const pascalCache = {}
function toPascalCase(str) {
	pascalCache[str] =
		pascalCache[str] ||
		(/^[\p{L}\d]+$/iu.test(str) &&
			str.charAt(0).toUpperCase() + str.slice(1)) ||
		str
			.replace(
				/([\p{L}\d])([\p{L}\d]*)/giu,
				(g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
			)
			.replace(/[^\p{L}\d]/giu, '')

	return pascalCache[str]
}

const knownLayouts = new Set(['Main', 'Docs'])
const knownNotLayouts = new Set()

function defaultLayoutPlugin() {
	return function (tree, file) {
		const filePathFull = file.history[0].replace(/\/[^\/]+$/, '')
		const pagesPathFull = join(file.cwd, pagesPath)
		const nestedDirs = filePathFull.substring(pagesPathFull.length + 1)
		const directories = nestedDirs ? nestedDirs.split('/') : []
		let layout = defaultLayout
		directories.some((directory) => {
			const layoutName = toPascalCase(directory)
			if (
				knownLayouts.has(layoutName) ||
				(!knownNotLayouts.has(layoutName) &&
					existsSync(join(layoutPath, layoutName + '.astro')))
			) {
				knownLayouts.add(layoutName)
				layout = layoutName
				return true
			} else {
				knownNotLayouts.add(layoutName)
			}
		})
		file.data.astro.frontmatter.layout = `${layoutPath}/${layout}.astro`
	}
}
