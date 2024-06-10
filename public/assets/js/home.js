function onUrlHome(){
  console.log('hi');
  const text = document.querySelector(".circle");
  text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
  const element = document.querySelectorAll(".circle span");
  for (let i = 0; i < element.length; i++) {
    element[i].style.transform = "rotate(" + i * 16 + "deg)";
  }
}

// addOnUrlFn(onUrlHome);
