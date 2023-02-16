let beltText = document.getElementById("beltText")
let quote = document.getElementById("quote")

window.addEventListener("scroll", function () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
      // console.log(scrolled);
    beltText.style.transform = `translateX(${(scrolled) * 10}px)`;


    

  const tracker = document.getElementById("scrollTracker")
  tracker.innerHTML = Math.floor(scrolled)+"%" ;

  
  });

  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
  height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight,
  scrolled = (winScroll / height) * 100;
  console.log(scrolled);

