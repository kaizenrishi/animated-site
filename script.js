// const scroll = new LocomotiveScroll({
//     el: document.querySelector(' [data-scroll-container]'),
//     smooth: true,
    
// });



const tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 90%", // 50% => div 90% => scrollling start
    end:"50% 90%",
    scrub:true,
    // markers:true
}});

tl.to("#fanta",{
    top:"120%",
    left:"0%",
    // duration:3,
    // delay:1,
},"a")

.to("#org",{
    top:"160%",
    left:"25%",
    // duration:3,
    // delay:1,
    
},"a")
.to("#org2",{
    width:"15%",
    top:"165%",
    right:"15%",
    // duration:3,
    // delay:1,

},"a")

.to("#lf",{
    width:"15%",
    top:"105%",
    rotate:"-120deg",
    left:"82%",
    // duration:3,
    // delay:1,
},"a")

.to("#lf1",{
    width:"15%",
    top:"165%",
    right:"15%",
    // duration:3,
    // delay:1,
},"a")

const tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%", // 50% => div 90% => scrollling start
    end:"70% 50%",
    scrub:true,
    // markers:true
}});

tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-60%",
    top:"-120%",
},"c")
tl2.from("#coc",{
    // rotate:"-90deg",
    left:"-50%",
    top:"10%",
},"c")
tl2.from(".lemon2",{
    rotate:"-90deg",
    right:"-60%",
    top:"-120%",
},"c")
tl2.from("#coc3",{
    // rotate:"-90deg",
    left:"-50%",
    top:"10%",
},"c")



tl2.to("#fanta",{
    top:"225%",
    left:"37%",
    width:"35%",

},"b")
tl2.to("#org",{
    top:"220%",
    left:"43%",
    width:"20%",

},"b")