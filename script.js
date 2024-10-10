const cutDropdown = document.getElementById('cut-dropdown');
const thickDropdown = document.getElementById('thick-dropdown');
const calculateBtn = document.getElementById('calculate');
const output = document.getElementById('output');

const cuts = {
  'sirloin': {'normal': '1 minute 30 seconds', 'thin': '1 minute', 'thick': '2 minutes'},
  'rump': {'normal': '2 minutes 30 seconds', 'thin': '2 minutes', 'thick': '3 minutes'},
  'fillet': {'normal': '2 minutes', 'thin': '1 minute 30 seconds', 'thick': '2 minutes 30 seconds'}
};

const getTime = (cut, thick) => {return cuts[cut][thick]}

calculateBtn.addEventListener('click', 
    () => {
        time = getTime(cutDropdown.value, thickDropdown.value);
        output.textContent = `${time} per side`;
        output.style.display = 'block';
}
                           );

/* PREVIOUS/FAILED ATTEMPTS

const getTime2 = (cut, thick) => {
  const regex = /"/;
  let cleanCut = cut.replace(regex, '');
  let cleanThick = thick.replace(regex, '')
  console.log(cleanCut + '.' + cleanThick)
  return cleanCut.cleanThick
}

const getTime = () => {  
   if (cutDropdown.value === 'sirloin' && thickDropdown.value === 'normal') {return sirloin.normal}
  else if (cutDropdown.value === 'sirloin' && thickDropdown.value === 'thin') {return sirloin.thin}
  else if (cutDropdown.value === 'rump' && thickDropdown.value === 'normal') {return rump.normal}
  else if (cutDropdown.value === 'rump' && thickDropdown.value === 'thick') {return rump.thick}
  else if (cutDropdown.value === 'fillet' && thickDropdown.value === 'thin') {return fillet.thin}
  else if (cutDropdown.value === 'fillet' && thickDropdown.value === 'thick') {return fillet.thick}
  else {return '2 minutes'}
};

*/
