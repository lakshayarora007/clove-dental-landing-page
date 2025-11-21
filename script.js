// Optional: pause marquee on hover
const track = document.querySelector('.track');
if(track){
  track.addEventListener('mouseenter', ()=> track.style.animationPlayState = 'paused');
  track.addEventListener('mouseleave', ()=> track.style.animationPlayState = 'running');
}
