const cutDropdown = document.getElementById('cut-dropdown');
const thickDropdown = document.getElementById('thick-dropdown');
const calculateBtn = document.getElementById('calculate');
const output = document.getElementById('output');

const sirloin = {
  normal: '1 minute 30 seconds',
  thin: '1 minute',
  thick: 2
}

const rump = {
  normal: '2 minutes 30 seconds',
  thin: 2,
  thick: '3 minutes'
}

const fillet = {
  normal: 2,
  thin: '1 minute 30 seconds',
  thick: '2 minutes 30 seconds'
};

// console.log(sirloin.normal)

// console.log(cutDropdown.value);
// console.log(thickDropdown.value);

const getTime = () => {  
   if (cutDropdown.value === 'sirloin' && thickDropdown.value === 'normal') {return sirloin.normal}
  else if (cutDropdown.value === 'sirloin' && thickDropdown.value === 'thin') {return sirloin.thin}
  else if (cutDropdown.value === 'rump' && thickDropdown.value === 'normal') {return rump.normal}
  else if (cutDropdown.value === 'rump' && thickDropdown.value === 'thick') {return rump.thick}
  else if (cutDropdown.value === 'fillet' && thickDropdown.value === 'thin') {return fillet.thin}
  else if (cutDropdown.value === 'fillet' && thickDropdown.value === 'thick') {return fillet.thick}
  else {return '2 minutes'}
};

// console.log(getTime())

calculateBtn.addEventListener('click', 
    () => {
        time = getTime();
        output.textContent = `${time} per side`;
        output.style.display = 'block';
}
                           );
