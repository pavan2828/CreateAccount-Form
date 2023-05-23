let profileBtn = document.getElementById('profileIcon');
let subMenu = document.getElementById('subMenu');
profileBtn.onclick = function(){
    subMenu.classList.toggle('s1');
}
let userE = document.getElementById('userD');
let D_id = document.getElementById('did');
let D_name = document.getElementById('dname');

let userData = localStorage.getItem('userData');
let parseData = JSON.parse(userData);
let numDatalength = parseData.length;

userE.textContent = parseData.name;
D_id.textContent = parseData.id;
D_name.textContent = parseData.name;

  


