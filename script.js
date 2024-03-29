const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// console.log(dets.clientX,dets.clientY);
// Check if animation has been played before
// if (!sessionStorage.getItem('animationPlayed')) {
//     // If not played, play animation and set flag in sessionStorage
//     firstPageAnim();
//     sessionStorage.setItem('animationPlayed', true);
// }


function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circleMouseFollower();

function firstPageAnim(){
    var t1 = gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity : 1,
        duration :1.5,

        ease :Expo.easeInOut
    })

    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        opacity : 1,
        duration : 1.5,
        stagger : .2
    })

    .from("#herofooter",{
        y:-10,
        opacity:1,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
firstPageAnim();