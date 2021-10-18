// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// alert("hello")
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let Mysrc = myImage.getAttribute('src');
    if(Mysrc === '../images/firework.jpeg'){
        // alert('hello');
        myImage.setAttribute('src','../images/firework2.jpeg');
    }
    else{
        myImage.setAttribute('src','../images/firework.jpeg');
    }

}

let myHeading = document.querySelector('h1');
let button = document.querySelector('button');
function setusername(){
    let my_Name = prompt('please input your name:');
    if(!my_Name||my_Name===null){
        setusername();
    }
    else{
         localStorage.setItem('name', my_Name);
        myHeading.textContent = my_Name+', why are you so handsome?';
    }
}

if(!localStorage.getItem('name')){
    setusername();
}
else{
    let namestorage = localStorage.getItem('name');
    myHeading.textContent = namestorage+', welcome to my world!'
}

button.onclick = function(){
    setusername();
}
