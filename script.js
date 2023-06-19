let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-btn-right').addEventListener('click', function(){
    offset = offset + 720;
    if (offset>1440){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider-btn-left').addEventListener('click', function(){
    offset = offset - 720;
    if (offset<0){
        offset = 1440;
    }
    sliderLine.style.left = -offset + 'px';
});