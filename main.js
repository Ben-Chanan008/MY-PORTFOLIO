const button = document.querySelector('.btn-first');
const button2 = document.querySelector('.btn-second');

button.addEventListener('mouseover', () =>{
    button.style.backgroundColor = "transparent";
    button.style.color = "#000";
    button.style.cursor = "pointer";
    button2.style.backgroundColor = "#000";
    button2.style.color = "#fff";
    button2.style.cursor = "pointer";

    setTimeout(() =>{
        button.style.backgroundColor = "#000";
        button.style.color = "#fff";
        button2.style.backgroundColor = "transparent";
        button2.style.color = "#000";
    },1000);
});

button2.addEventListener('mouseover', () =>{
    button.style.backgroundColor = "transparent";
    button.style.color = "#000";
    button2.style.backgroundColor = "#000";
    button2.style.color = "#fff";
});
