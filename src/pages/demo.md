<div class="mx-auto prose text-center">
  <h1>Demo</h1>
  <p>This is a page with working Remark42. Feel free to sign in and try its features.</p>
  <hr/>
  <div id="remark42" class="max-w-2xl mx-auto"></div>
  <noscript>You use your browser with disabled JavaScript. Please enable JavaScript for comments.</noscript>
  <script>
    window.remark_config = {
      host: 'https://demo.remark42.com',
      site_id: 'remark',
      components: ['embed'],
      url: 'https://remark42.com/demo/',
      max_shown_comments: 20,
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    }
  </script>
  <script>!function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);</script>
</div>
