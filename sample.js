javascript:(function(){
    var btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.zIndex = 1000;
    btn.onclick = function(){ alert("Button clicked!"); };
    document.body.appendChild(btn);
  })();