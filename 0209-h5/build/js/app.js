/*! special-2017-cn v 0.0.5  | (c) Thu Feb 09 2017 16:43:00 GMT+0800 (中国标准时间)  Julian  | https://nnn.li  好货大清仓 */
!function(e,t){function a(){var t=n.getBoundingClientRect().width;t/s>720&&(t=720*s);var a=t/10;n.style.fontSize=a+"px",m.rem=e.rem=a}var i,r=e.document,n=r.documentElement,o=r.querySelector('meta[name="viewport"]'),c=r.querySelector('meta[name="flexible"]'),s=0,l=0,m=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var d=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(l=parseFloat(d[1]),s=parseInt(1/l))}else if(c){var p=c.getAttribute("content");if(p){var u=p.match(/initial\-dpr=([\d\.]+)/),f=p.match(/maximum\-dpr=([\d\.]+)/);u&&(s=parseFloat(u[1]),l=parseFloat((1/s).toFixed(2))),f&&(s=parseFloat(f[1]),l=parseFloat((1/s).toFixed(2)))}}if(!s&&!l){var g=e.navigator.userAgent,w=(!!g.match(/android/gi),!!g.match(/iphone/gi)),h=w&&!!g.match(/OS 9_3/),v=e.devicePixelRatio;s=w&&!h?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1,l=1/s}if(n.setAttribute("data-dpr",s),!o)if(o=r.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var y=r.createElement("div");y.appendChild(o),r.write(y.innerHTML)}e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(a,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(a,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*s+"px":r.addEventListener("DOMContentLoaded",function(){r.body.style.fontSize=12*s+"px"},!1),a(),m.dpr=e.dpr=s,m.refreshRem=a,m.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},m.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={})),function(){var e="https:"==document.location.protocol?"https://ssl.":"http://www.";document.write(unescape("%3Cscript src='"+e+"google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));try{var t=_gat._getTracker("UA-436090-1");t._trackPageview()}catch(a){}!function(e,t,a,i,r,n,o){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,n=t.createElement(a),o=t.getElementsByTagName(a)[0],n.async=1,n.src=i,o.parentNode.insertBefore(n,o)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-436090-2","auto"),ga("require","displayfeatures"),ga("send","pageview")}();