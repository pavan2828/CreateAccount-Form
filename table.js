
let tabelE = document.getElementById('table');

let userData = localStorage.getItem('userData');
let parseData = JSON.parse(userData);
let numDatalength = parseData.length;

console.log(parseData)


let trE = document.createElement('tr');
tabelE.appendChild(trE);

for (let i = 0; i < 3; i++) {
    let tdE = document.createElement('td');
    
    if(i===0){
        tdE.textContent = parseData.name;
        trE.appendChild(tdE)
    }
    if(i===1){
        tdE.textContent = parseData.email;
        trE.appendChild(tdE)
    }
    if(i===2){
        tdE.textContent = parseData.status;
        trE.appendChild(tdE)
    }
    console.log(tabelE)
    

  }