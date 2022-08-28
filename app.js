// https://www.omnicalculator.com/chemistry/mole-fraction

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const molefractionRadio = document.getElementById('molefractionRadio');
const soluteRadio = document.getElementById('soluteRadio');
const solventRadio = document.getElementById('solventRadio');

let molefraction;
let solute = v1;
let solvent = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

molefractionRadio.addEventListener('click', function() {
  variable1.textContent = 'Solute';
  variable2.textContent = 'Solvent';
  solute = v1;
  solvent = v2;
  result.textContent = '';
});

soluteRadio.addEventListener('click', function() {
  variable1.textContent = 'Mole fraction';
  variable2.textContent = 'Solvent';
  molefraction = v1;
  solvent = v2;
  result.textContent = '';
});

solventRadio.addEventListener('click', function() {
  variable1.textContent = 'Mole fraction';
  variable2.textContent = 'Solute';
  molefraction = v1;
  solute = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(molefractionRadio.checked)
    result.textContent = `Mole fraction = ${computeMolefraction().toFixed(2)}`;

  else if(soluteRadio.checked)
    result.textContent = `Solute = ${computeSolute().toFixed(2)}`;

  else if(solventRadio.checked)
    result.textContent = `Solvent = ${computeSolvent().toFixed(2)}`;
})

// calculation

function computeMolefraction() {
  return Number(solute.value) / (Number(solute.value) + Number(solvent.value));
}

function computeSolute() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeSolvent() {
  return (Number(solute.value) / Number(molefraction.value)) - Number(solute.value);
}