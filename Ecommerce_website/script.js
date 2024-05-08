const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
// when the x is clicked it will open and you will see the menu//
if (bar) {
        bar.addEventListener('click',() => {
            nav.classList.add('active');
        })
}
// when the x is clicked the second time it will close//
if(close){
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
}