const content = document.querySelector(".content"),
listVideo = document.querySelectorAll(".video-list video"),
playVideo = document.querySelector(".video video");

for (const item of listVideo) {
    item.addEventListener("click",()=>{
       let index = item.src.indexOf("video");
       playVideo.src = item.src.slice(index);
       playVideo.nextElementSibling.textContent = item.nextElementSibling.textContent;
       playVideo.play();
    });
}
