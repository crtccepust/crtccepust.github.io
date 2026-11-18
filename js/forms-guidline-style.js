(function(){
var q=document.getElementById('fq'),nf=document.getElementById('nf'),cat='all',dl=document.querySelectorAll('#faqlist details');
function ff(){var n=0;dl.forEach(function(d){var ok=(cat==='all'||d.dataset.cat===cat)&&d.textContent.toLowerCase().indexOf(q.value.toLowerCase())>-1;d.hidden=!ok;if(ok)n++});nf.style.display=n?'none':'block'}
q.oninput=ff;
document.querySelectorAll('.cc-guide .chip').forEach(function(c){c.onclick=function(){cat=c.dataset.c;document.querySelectorAll('.cc-guide .chip').forEach(function(x){x.classList.toggle('on',x===c)});ff()}});
dl.forEach(function(d){d.ontoggle=function(){if(d.open)dl.forEach(function(o){if(o!==d)o.open=false})}});
})();

(function(){
var ul=document.getElementById('chk'),K='crtc-fdd-chk',st=[],ins=ul.querySelectorAll('input'),pg=document.getElementById('pg');
try{st=JSON.parse(localStorage.getItem(K)||'[]')}catch(e){}
function upd(){var c=ul.querySelectorAll('input:checked').length;pg.style.width=(c/ins.length*100)+'%';pg.parentNode.setAttribute('aria-valuenow',Math.round(c/ins.length*100))}
ins.forEach(function(x,i){x.checked=!!st[i];x.onchange=function(){st[i]=x.checked;try{localStorage.setItem(K,JSON.stringify(st))}catch(e){}upd()}});
document.getElementById('rst').onclick=function(){st=[];try{localStorage.removeItem(K)}catch(e){}ins.forEach(function(x){x.checked=false});upd()};
upd();
})();