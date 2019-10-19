document.getElementById('name').innerHTML = localStorage['title'] || 'Patiparn Thamboonrak';

setInterval(function() {
    localStorage['title'] = document.getElementById('name').innerHTML;
}, 1000);

function addLi(){
let mySkill = document.getElementById('mySkill').value,
listNode = document.getElementById('list'),
liNode = document.createElement('Li'),
txtNode = document.createTextNode(mySkill);

liNode.appendChild(txtNode);
listNode.appendChild(liNode);
};

