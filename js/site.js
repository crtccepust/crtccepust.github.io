/* CRTC shared layer: injects header/footer, mobile menu, scroll effects */
(function(){
  var LINKS=[["index.html","Home"],["about.html","About"],["personnel.html","Personnel"],["services.html","Services"],["rates.html","Rates"],["forms.html","Forms & Guidelines"],["notice.html","Notices"],["contact.html","Contact"]];
  var page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
  var onIndex=(page==="index.html");

  function header(){
    var items=LINKS.map(function(l){return '<li><a href="'+l[0]+'"'+(l[0]===page?' class="active" aria-current="page"':'')+'>'+l[1]+'</a></li>';}).join("");
    return '<a class="skip-link" href="#main">Skip to content</a>'+
    '<div class="sh-wrap"><a class="sh-logo" href="index.html" aria-label="CRTC home">'+
    '<img src="assets/crtc_logo.svg" alt="" onerror="this.style.display=\'none\'"><span><b>CRTC, CE</b><small>PUST, Pabna</small></span></a>'+
    '<button class="sh-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="sh-nav"><i class="fas fa-bars"></i></button>'+
    '<ul class="sh-nav" id="sh-nav">'+items+
    '<li><a href="#" class="sh-verify" id="sh-verify"><i class="fas fa-shield-alt"></i> Verify Report</a></li>'+
    '<li class="sh-pust"><a href="https://pust.ac.bd/" target="_blank" rel="noopener noreferrer" title="PUST website"><img src="assets/PUST_Logo.svg" alt="PUST" onerror="this.style.display=\'none\'"></a>'+
	'<li><a href="admin.html" class="sh-staff" title="Management Portal" aria-label="Management Portal"><i class="fas fa-user-lock"></i></a></li></ul></div>';
  }
  function footer(){
    return '<div class="sf-grid"><div><h3>About CRTC, PUST</h3><p style="line-height:1.8;margin-bottom:12px">The testing and consultancy body of the Department of Civil Engineering, Pabna University of Science and Technology.</p><a href="about.html" style="color:#e84c3d;font-weight:500">Read more <i class="fas fa-arrow-right"></i></a></div>'+
    '<div><h3>Quick Links</h3><ul>'+LINKS.slice(1).map(function(l){return '<li><a href="'+l[0]+'"><i class="fas fa-angle-right"></i> '+l[1]+'</a></li>';}).join("")+'</ul></div>'+
    '<div><h3>Contact</h3><ul class="sf-contact"><li><i class="fas fa-map-marker-alt"></i><span>Room# 318, Dept. of Civil Engineering<br>Academic Building-3 (3rd Floor), PUST<br>Rajapur, Pabna-6600, Bangladesh</span></li>'+
    '<li><i class="fas fa-phone-alt"></i><a href="tel:+8801721717447">+88 01721 717447</a></li>'+
    '<li><i class="fas fa-envelope"></i><a href="mailto:crtc.ce@pust.ac.bd">crtc.ce@pust.ac.bd</a></li></ul></div></div>'+
    '<div class="sf-bottom">&copy; '+new Date().getFullYear()+' Center of Research, Testing and Consultation (CRTC), Department of Civil Engineering, PUST. All Rights Reserved.'+
    '<button class="sf-dev" id="sf-dev" title="Developer info" hidden><i class="fas fa-code"></i></button></div>';
  }

  function mount(tag,cls,html,first){
    var el=document.querySelector('[data-site="'+tag+'"]'); if(!el) return null;
    var n=document.createElement(tag); n.className=cls+(el.getAttribute("data-class")?" "+el.getAttribute("data-class"):""); n.innerHTML=html;
    el.replaceWith(n); return n;
  }

  document.addEventListener("DOMContentLoaded",function(){
    var h=mount("header","site-header",header());
    var f=mount("footer","site-footer",footer());
    var main=document.querySelector("main")||document.querySelector(".page-hero")||document.querySelector("section");
    if(main&&!document.getElementById("main")) main.id="main";

    if(h){
      var btn=h.querySelector(".sh-toggle"),nav=h.querySelector("#sh-nav");
      btn.addEventListener("click",function(){var o=nav.classList.toggle("open");btn.setAttribute("aria-expanded",o);btn.firstChild.className=o?"fas fa-times":"fas fa-bars";});
      nav.addEventListener("click",function(e){if(e.target.closest("a")&&e.target.closest("a").id!=="sh-verify")nav.classList.remove("open");});
      document.addEventListener("keydown",function(e){if(e.key==="Escape")nav.classList.remove("open");});
      h.querySelector("#sh-verify").addEventListener("click",function(e){
        e.preventDefault(); nav.classList.remove("open");
        if(typeof window.openModal==="function") window.openModal("verify"); else location.href="index.html?verify=1";
      });
    }
    if(f&&typeof window.openDevModal==="function"){var d=f.querySelector("#sf-dev");d.hidden=false;d.onclick=window.openDevModal;}
    if(onIndex&&/[?&]verify=1/.test(location.search)&&typeof window.openModal==="function") window.openModal("verify");

    document.querySelectorAll(".img-wrapper img,.chairman-img-wrapper img,.team-card img").forEach(function(im){
      function fb(){var w=im.parentElement,n=(im.alt||"").replace(/^((Dr|Md|Mr|Mrs|Prof)\.?\s+)+/i,"").trim().split(/\s+/);
        w.classList.add("img-fallback");w.setAttribute("data-initials",(n[0]||"?").charAt(0)+(n[1]?n[1].charAt(0):""));}
      if(im.complete&&im.naturalWidth===0&&im.src)fb();im.addEventListener("error",fb);});
    var g=document.createElement("div");g.id="fx-grid";g.setAttribute("aria-hidden","true");document.body.prepend(g);
    var bar=document.createElement("div");bar.id="sh-progress";document.body.appendChild(bar);
    var top=document.createElement("button");top.id="sh-top";top.setAttribute("aria-label","Back to top");top.innerHTML='<i class="fas fa-arrow-up"></i>';
    top.onclick=function(){window.scrollTo({top:0,behavior:"smooth"});};document.body.appendChild(top);
    function onScroll(){
      var y=window.scrollY,max=document.documentElement.scrollHeight-innerHeight;
      bar.style.width=(max>0?y/max*100:0)+"%";top.classList.toggle("show",y>500);if(h)h.classList.toggle("scrolled",y>10);
    }
    addEventListener("scroll",onScroll,{passive:true});onScroll();

    if("IntersectionObserver" in window){
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add("in");io.unobserve(t);setTimeout(function(){t.classList.remove("js-reveal","in");},700);}});},{threshold:.12});
      document.querySelectorAll(".mission-card,.team-card,.service-card,.card,.feature-card,.stat-card,.form-card,.download-card").forEach(function(el){el.classList.add("js-reveal");io.observe(el);});
    }
  });
})();
