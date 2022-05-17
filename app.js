var close = document.querySelector(".close")
var open = document.querySelector(".open")
var popUp = document.querySelector(".popUp")
var popUpContainer = document.querySelector(".popUp-container")
var lateralInfo = document.querySelector(".lateralInfo")


var activeLateral = document.querySelector('.hambur')
var desactivarLateral = document.querySelector('.desactivar')


open.addEventListener('click', function(e) {
    e.preventDefault()
    popUpContainer.style.opacity ='1';
    popUpContainer.style.visibility ='visible';
    popUp.classList.toggle('popUp-close')

});

close.addEventListener('click', function(e) {
    e.preventDefault()
    popUp.classList.toggle('popUp-close')
    setTimeout(()=>{
        popUpContainer.style.opacity ='0';
        popUpContainer.style.visibility ='hidden';
    },320)

})

window.addEventListener('click',function(e){
    if(e.target == popUpContainer){
        popUp.classList.toggle('popUp-close')
        setTimeout(()=>{
            popUpContainer.style.opacity ='0';
            popUpContainer.style.visibility ='hidden';
        },320)
    }
})


activeLateral.addEventListener('click',function(){
    lateralInfo.classList.toggle('activo')
    activeLateral.style.opacity='0'
    activeLateral.style.visibility='hidden'

})

desactivarLateral.addEventListener('click',function(){
    lateralInfo.classList.toggle('activo')
    activeLateral.style.opacity='1'
    activeLateral.style.visibility='visible'

})