let area = document.querySelector(".area");

const throttle = (fn, delay) => {
    let lastCalled = 0;
    return (...args) => {
      let now = new Date().getTime();
      if(now - lastCalled < delay) {
        return;
      }
      lastCalled = now;
      return fn(...args);
    }
  }
  
area.addEventListener("mousemove", throttle(function(details){
    var image = ["image.jpeg", "image2.jpeg"];
    let div = document.createElement("div");
    div.classList.add("image_div");
    document.body.append(div);
    div.style.left = details.clientX - 70 + "px";
    div.style.top = details.clientY - 200+"px";
    let img = document.createElement("img");
    img.setAttribute("src", image[(Math.floor(Math.random() * image.length))]);
    div.append(img);

    gsap.to(img,{
        translateY: 0 + "%",
        ease: Power4,
    });
    gsap.to(img,{
        delay: .8,
        duration: 1,
        translateY: 100 + "%",
        ease: Power4,
    });
    setTimeout(function(){
        div.remove();
    },2000);
},300));
