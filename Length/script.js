let km = document.getElementById('km');
let m = document.getElementById('m');
let cm = document.getElementById('cm');
let mm = document.getElementById('mm');
km.addEventListener("input" , ()=>{
  let kilo = Number(km.value)
  m.value = kilo*1000;
  cm.value = kilo*100000;
  mm.value = kilo*1000000;
});
m.addEventListener("input" , ()=>{
 let  meter = Number(m.value)
  km.value = meter/1000;
  cm.value = meter*100;
  mm.value = meter*1000;
});
cm.addEventListener("input" , ()=>{
  let cmeter = Number(cm.value)
  km.value = cmeter/100000;
  m.value = cmeter/100;
  mm.value = cmeter*10;
});
mm.addEventListener("input" , ()=>{
 let mmeter = Number(mm.value)
  km.value = mmeter/1000000;
  m.value = mmeter/1000;
  cm.value = mmeter/10;
});