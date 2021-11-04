const prev = $('#previous');
const next = $('#next');
const pictContent = $('.ContentPict');
const images = $('.picture div');
const width = 700;
var imgIndex = 0, position = 0;

function prevBtn(){
    prev.on('click', () => {
        imgIndex--;
        if(imgIndex < 0){
            imgIndex = images.length-1;
            position = -width * imgIndex;
        }else{
            position += width;
        }backimage();
    })
}

function nextBtn(){
    next.on('click', () => {
        imgIndex++;
        if(imgIndex >= images.length){
            imgIndex = 0;
            position = 0;
        }else{
            position -= width;
        }backimage();
    })
}

function press(){
    prevBtn();
    nextBtn();
}

function backimage(){
    const prevIndex = images.eq(0)
    prevIndex.animate({marginLeft: position})
}press();
