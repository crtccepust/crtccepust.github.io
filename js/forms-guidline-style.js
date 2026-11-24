(function(){
  var q=document.getElementById('fq'),nf=document.getElementById('nf'),cat='all',dl=document.querySelectorAll('#faqlist details');
  if(!q || !nf) return;
  function ff(){var n=0;dl.forEach(function(d){var ok=(cat==='all'||d.dataset.cat===cat)&&d.textContent.toLowerCase().indexOf(q.value.toLowerCase())>-1;d.hidden=!ok;if(ok)n++});nf.style.display=n?'none':'block'}
  q.oninput=ff;
  document.querySelectorAll('.cc-guide .chip').forEach(function(c){c.onclick=function(){cat=c.dataset.c;document.querySelectorAll('.cc-guide .chip').forEach(function(x){x.classList.toggle('on',x===c)});ff()}});
  dl.forEach(function(d){d.ontoggle=function(){if(d.open)dl.forEach(function(o){if(o!==d)o.open=false})}});
})();

(function(){
  var ul=document.getElementById('chk'),pg=document.getElementById('pg');
  if(!ul || !pg) return;
  var K='crtc-fdd-chk',st=[],ins=ul.querySelectorAll('input');
  try{st=JSON.parse(localStorage.getItem(K)||'[]')}catch(e){}
  function upd(){var c=ul.querySelectorAll('input:checked').length;pg.style.width=(c/ins.length*100)+'%';pg.parentNode.setAttribute('aria-valuenow',Math.round(c/ins.length*100))}
  ins.forEach(function(x,i){x.checked=!!st[i];x.onchange=function(){st[i]=x.checked;try{localStorage.setItem(K,JSON.stringify(st))}catch(e){}upd()}});
  var rst=document.getElementById('rst');
  if(rst) rst.onclick=function(){st=[];try{localStorage.removeItem(K)}catch(e){}ins.forEach(function(x){x.checked=false});upd()};
  upd();
})();

const CRTC_CONTACT = 'Questions: CRTC &middot; <a href="mailto:crtc.ce@pust.ac.bd">crtc.ce@pust.ac.bd</a> &middot; <a href="tel:+8802588844915">+8802588844915</a> &middot; CRTC, CE, PUST';

document.querySelectorAll('.crtc-contact').forEach(function(el) {
  el.innerHTML = CRTC_CONTACT;
});