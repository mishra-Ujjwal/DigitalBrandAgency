function init(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
init()

var cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",function(dets){
  cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    gsap.to(cursor,{
      display:"block",
      x:dets.x+5,
      y:dets.y+5,
    })
})
document.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
      display:"none",
      duraion:0.1,
    })
})

// Create a GSAP timeline with scroll trigger
let tl = gsap.timeline();

// Initial animation (without scroll)
gsap.to(".page1 h1", {
  x: 80,
  duration: 1,
});

gsap.to(".page1 h2", {
  x: -50,
  duration: 1,
});

// Scroll-triggered animations within the timeline
// Also start at the beginning


tl.to(".page1 video",{
    width:"90%",
    height:"100%",
    scrollTrigger:{
        trigger:".page1 video",
        scroller:".main",
        yoyo:true,
        start:"top 70%",
        end:"top 0%",
        scrub:2
    }
})
 
var tl2 = gsap.timeline(
  {
    scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",

      start:"top -50%",
      end:"top -50%",
      scrub:2,
    }
  }
)
tl2.to(".main",{
  backgroundColor:"white"
})
  
var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    start:"top -330%",
    end:"top -340%",
    scrub:3,
  }
})
tl3.to(".main",{
  backgroundColor:"black"
})
let boxes = document.querySelectorAll('.box')
boxes.forEach(function(elem){
  elem.addEventListener("mousemove",function(){
    var att = elem.getAttribute("data-image")
    console.log(att)
    cursor.style.width="300px";
    cursor.style.height="250px";
    cursor.style.borderRadius="0";
    cursor.style.backgroundImage=`url(${att})`
    elem.style.opacity="1"
  })
  elem.addEventListener("mouseleave",function(){
    cursor.style.backgroundColor="aquamarine";
    elem.style.opacity="0.5"
    cursor.style.width="15px";
    cursor.style.height="15px";
    cursor.style.borderRadius="50%";
    cursor.style.backgroundImage=`none`
  })
})