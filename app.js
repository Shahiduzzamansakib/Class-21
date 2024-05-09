let light = document.querySelector('.light');
let on = document.querySelector('.on');
let off = document.querySelector('.off');

on.addEventListener('click', function(){

    light.src =`./img/pic_bulbon.gif`

});

off.addEventListener('click', function(){

    light.src =`./img/pic_bulboff.gif`
    
});