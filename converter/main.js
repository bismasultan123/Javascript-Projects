let cal = document.getElementById("cal");
let kel = document.getElementById('kel');
let farh = document.getElementById('fah');
cal.addEventListener('input', ()=>{
  let c = Number(cal.value);
  kel.value = c+273.15;
  farh.value = ((9/5)*c)+32;
});
kel.addEventListener('input', ()=>{
  let k = Number(kel.value);
  cal.value = k-273.15;
  farh.value = (9/5)*(k-273.15)+32;

});
farh.addEventListener('input', ()=>{
  let f = Number(farh.value);
  kel.value = f-273.15;
  cal.value = (f-32)*5/9;

});
