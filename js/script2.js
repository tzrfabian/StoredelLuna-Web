const prev2 = $('#previous2');
const next2 = $('#next2');
const pictContent2 = $('.ContentPict2');
const images2 = $('.picture2 div');
const width2 = 700;
var imgIndex2 = 0, position2 = 0;

function prevBtn2(){
    prev2.on('click', () => {
        imgIndex2--;
        if(imgIndex2 < 0){
            imgIndex2 = images2.length-1;
            position2 = -width2 * imgIndex2;
        }else{
            position2 += width2;
        }newImage2();
    })
}

function nextBtn2(){
    next2.on('click', () => {
        imgIndex2++;
        if(imgIndex2 >= images2.length){
            imgIndex2 = 0;
            position2 = 0;
        }else{
            position2 -= width2;
        }newImage2();
    })
}

function press2(){
    prevBtn2();
    nextBtn2();
}

function newImage2(){
    const prevItem2 = images2.eq(0)
    prevItem2.animate({marginLeft: position2})
}press2();
