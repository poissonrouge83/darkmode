let btn     = document.querySelector("button");
let body    = document.querySelector("body");




btn.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btn.innerHTML = "mode nuit"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btn.innerHTML = "mode jour"

    }

})

/******************************************************************** 

btn.addEventListener("click", blackf )

function blackf(){
     body.style.backgroundColor = "#333";
     body.style.color           =   "white";
}



btn.addEventListener("click", () => {
    remove.blackf();
} )*/








