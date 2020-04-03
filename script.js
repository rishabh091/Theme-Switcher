let dropdown=document.getElementById("promptId");
let button=document.getElementById("selectTheme");

button.addEventListener("mouseover",()=>{
    dropdown.style.opacity="1";
    dropdown.addEventListener("mouseover",()=>{
        dropdown.style.opacity="1";
    });
});
button.addEventListener("mouseout",()=>{
    dropdown.style.opacity="0";
});
dropdown.addEventListener("mouseout",()=>{
    dropdown.style.opacity="0";
});


let darkTheme=document.getElementById("darkTheme");
darkTheme.addEventListener("click",()=>{
    let body=document.getElementsByTagName("body");
    body.item(0).classList.remove("light");
    body.item(0).classList.add("dark");

    let nav=document.getElementsByTagName("nav");
    nav.item(0).classList.remove("light-bar");
    nav.item(0).classList.add("dark-bar");

    dropdown.classList.remove("light-prompt");
    dropdown.classList.add("dark-prompt");

    let header=document.getElementsByTagName("header");
    header.item(0).classList.remove("light-header");
    header.item(0).classList.add("dark-header");
});

let lightTheme=document.getElementById("lightTheme");
lightTheme.addEventListener("click",()=>{
    let body=document.getElementsByTagName("body");
    body.item(0).classList.remove("dark");
    body.item(0).classList.add("light");

    let nav=document.getElementsByTagName("nav");
    nav.item(0).classList.remove("dark-bar");
    nav.item(0).classList.add("light-bar");

    dropdown.classList.remove("dark-prompt");
    dropdown.classList.add("light-prompt");

    let header=document.getElementsByTagName("header");
    header.item(0).classList.remove("dark-header");
    header.item(0).classList.add("light-header");
});