let rect = document.querySelector(".rect");

rect.addEventListener("mousemove",function(details){
    // console.log(rect.getBoundingClientRect().left);
    let color;
    let part_length = (details.clientX) - (rect.getBoundingClientRect().left);
    if(part_length < rect.getBoundingClientRect().width/2){
        current = gsap.utils.mapRange(0, rect.getBoundingClientRect().width/2, 0, 255, part_length);
        color = `rgb(255, ${current}, ${current})`
    }
    else if(part_length > rect.getBoundingClientRect().width/2){
        part_length = part_length - rect.getBoundingClientRect().width/2;
        current = gsap.utils.mapRange(0, rect.getBoundingClientRect().width/2, 255, 0, part_length);
        color = `rgb(${current}, ${current}, 255)`
    }
    // console.log(current);
    rect.style.backgroundColor = color;
    gsap.to(rect,{
        backgroundColor: color,
        ease: Power4,
    });
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor : "black",
        ease: Power4,
    });
});
