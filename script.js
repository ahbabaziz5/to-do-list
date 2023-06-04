function todo() {
    let input = document.getElementById('input');

    let list = document.getElementById('list');
   
    list.innerHTML += `<li>${input.value}</li><button onclick = "edit(prompt(''))"><i class="fa-solid fa-pen-to-square"></i></button><button onclick='del()''><i class="fa-solid fa-trash"></i></button>`
    input.value = " "
}
function edit(a) {
    let list = document.getElementById('list');
    list.innerHTML = `<li>${a}</li><button onclick='del()'><i class="fa-solid fa-trash"></i></button>`
}
function del() {
    let list = document.getElementById('list');
    list.innerHTML = " "}
function al(){
let list = document.getElementById('list');
list.innerHTML=" "
}
