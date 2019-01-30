// jQuery(window).on('load', function() {
//     setTimeout(function() {
//       $('#myModal').modal('show');
//      }, 1000); 
//   });

// $(document).ready(function()
//    {
//       $("myModal").modal("show");
//    });
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function () {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
});

vid.addEventListener("timeupdate", function () {
    // Check you time here and
    console.log(this.currentTime)
    // if (this.currentTime > 5) //Where t = CurrentTime
    // {
    //     console.log('movemeaddclass')
    //     $('#polina').addClass('moveme')
    // }
    // if (this.currentTime > 10) //Where t = CurrentTime
    // {
    //     console.log('pause me')
    //     vid.pause();
    //     // to capture IE10
    //     vidFade();
    // }
})

pauseButton.addEventListener("click", function () {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "Pause";
    } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
    }
})