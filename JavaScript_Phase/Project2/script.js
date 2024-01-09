var cursorleft = 0;
var rectleft = 0;

let intense = 0;
let color = 0;
let length = 400;
let recttop = 0;
let cursortop = 0;

function color_intensity(rectleft, length, cursorleft){
    length = length/2;
    let intensity = (255/length)*(cursorleft - rectleft);
    return intensity;
}

var rect = document.querySelector(".rect");

var elsewere = document.querySelector("body");

rect.addEventListener("mousemove",function(){
    rectleft = rect.getBoundingClientRect().left;
    recttop = rect.getBoundingClientRect().top;
    // console.log(rectleft);
    // console.log(recttop);
});

elsewere.addEventListener("mousemove",function(details){
    cursorleft = details.clientX;
    cursortop = details.clientY;
    // console.log(cursorleft);
    // console.log(cursortop);

    if ((cursorleft - rectleft <= 200) && (cursorleft >= rectleft) && (cursortop <= recttop + 200) && (cursortop >= recttop)){
        intense = color_intensity(rectleft, length, cursorleft);
        // console.log(intense);
        color = `rgb(${255}, ${intense}, ${intense})`;
    }
    else if ((cursorleft - rectleft > 200) && (cursorleft < rectleft + 400) && (cursortop <= recttop + 200) && (cursortop >= recttop)){
        intense = color_intensity(rectleft, length, cursorleft);
        // console.log(intense);
        color = `rgb(${510 - intense}, ${510 - intense}, ${255})`;
    }
    else{
        // console.log(intense);
        color = `rgb(${0}, ${0}, ${0})`
    }
    
    // console.log(intense);
    // console.log(color);

    rect.style.backgroundColor = color;
});
