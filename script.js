const menu = document.querySelector(".menu");
const navegacion = document.querySelector("nav");
const preview = document.querySelector(".proyectos");
const modal = document.querySelector(".modal");
let contador = 1;


document.addEventListener("DOMContentLoaded", () => {

    menu.addEventListener('click',(e)=>{
        if(contador == 1){
            navegacion.style.left = "0" ;
            contador = 0;
        }else{
            navegacion.style.left = "-100%" ;
            contador = 1;
        }
    
    })

    preview.addEventListener('click',(e)=>{
        let pre = parseInt(e.target.getAttribute("preview"));
        let img;

        console.log("hiciste click en la preview "+ e.target.getAttribute("preview"));
        console.log(img);

        switch (pre) {
            case 1:
                if(img != 1){
                    console.log("entre");
                    img = 1;
                    modal.style.display = "block";
                }
                else{
                    modal.style.display = "none";
                }
                
                break;
            case 2:
                if(img != 2){
                    img = 2;
                    modal.style.display = "block";
                }
                else{
                    modal.style.display = "none";
                }
                
                break;
            case 3:
                if(img != 3){
                    img = 3;
                    modal.style.display = "block";
                }
                else{
                    modal.style.display = "none";
                }
                
                break;
                case 4:
                    modal.style.display = "none";
                
                break;
        
            default:
                break;
        }
        

    })

})

