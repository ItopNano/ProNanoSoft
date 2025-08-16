

document.addEventListener('DOMContentLoaded', function () {
    if (typeof Typed !== 'undefined') { 
        new Typed('#typed_output100', {
            strings: [
                "Hi, I am Taqi",
                "with you",
                "We are in",
                "Itop ProtoSoft!",
                "We can buy, sell",
                "and chat here."
                // "I am a Web Designer",
                // "I have 2 years of experience"
                
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }
});

document.getElementById("btn200").addEventListener("click", function() {
    document.querySelector(".about_me").scrollIntoView({ behavior: "smooth" });
});

// document.getElementById("login100").addEventListener("click", function() {
//     document.querySelector(".about_me").scrollIntoView({ behavior: "smooth" });
// });

document.getElementById("Sa1").addEventListener("click", function() {
    document.querySelector(".Skills").scrollIntoView({ behavior: "smooth" });
});


function downloadFile() {
  const link = document.createElement('a');
  link.href = 'profile_Taqidata.png'; 
  link.download = 'profile_Taqidata.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


