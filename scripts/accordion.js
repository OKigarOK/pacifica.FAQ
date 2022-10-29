const acc = document.getElementsByClassName("accordion");

const allPanels = document.getElementsByClassName("panel")

// for (let panelHeight of allPanels) {
//   console.log(panelHeight);
// }

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    // const parent = this.parentElement;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      // panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.maxHeight = "100%";
      // parent.style.maxHeight = "100%"
    } 
  });
}
