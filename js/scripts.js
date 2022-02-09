const form=document.querySelector('form');
const ul=document.querySelector('ul');
const button=document.querySelector('button');
const input=document.getElementById('list');
let listArray=localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')):[];

localStorage.setItem('list',JSON.stringify(listArray));
const data = JSON.parse(localStorage.getItem('list'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent=text;
    ul.appendChild(li);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    listArray.push(input.value);
    localStorage.setItem('list',JSON.stringify(listArray));
    liMaker(input.value);
    input.value="";
});

data.forEach(item => {
    liMaker(item);
});

button.addEventListener('click',function(){
    localStorage.clear();
    while(ul.firstChild) {
    ul.removeChild(ul.firstChild);}
});