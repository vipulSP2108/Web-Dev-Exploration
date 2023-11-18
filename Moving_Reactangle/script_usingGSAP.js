let rect = document.querySelector(".moving_rect");
let full = document.querySelector("body");

full.addEventListener("mousemove", function(details){
    var full_contain = full.getBoundingClientRect();
    var current_pos = gsap.utils.mapRange(full_contain.left, full_contain.right, 20, 80, details.clientX);
    console.log(current_pos);
    gsap.to(rect,{
        left : `${current_pos}%`,
        ease: Power4,
    });
})

// rect.addEventListener("mousemove", function(details){
//     console.log(details.clientX);
// })
