const form = document.getElementById('mainform')
const video = document.getElementById('video')


form.addEventListener('submit', (e) => {
 e.preventDefault() 
 if (document.getElementById('snopp').value=="Noah") {
    video.src = 'https://www.youtube.com/embed/cEcv1RjxsMw'
    video.style.visibility = "visible"
 }
 if (document.getElementById('snopp').value=="Oskar") {
    video.src = 'https://www.youtube.com/embed/AuFAx5hbEAk'
    video.style.visibility = "visible"
 }
 if (document.getElementById('snopp').value=="Elias") {
    video.src = 'https://www.youtube.com/embed/fOd16PT1S7A'
    video.style.visibility = "visible"
 }
});


console.log("bajs");
