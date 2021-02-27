function hide()
{
    document.getElementById("starten").style.display='none';
}

function texthide()
{
    document.getElementById("hide2").style.display='none';
}

function play() {
    document.getElementById('video').play();
}

function show() {
  document.getElementById("neuertext").style.display = "block";
}

 // Selecting button element
    var btn = document.getElementById("starten");
     
    // Assigning event listeners to the button
    btn.addEventListener("click", hide);
   btn.addEventListener("click", texthide);
    btn.addEventListener("click", play);
    btn.addEventListener("click", show);
    
    document.getElementById('video').addEventListener('ended',function(){
     window.location.href = 'vk.html';
 },false);

