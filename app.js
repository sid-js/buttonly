let button = document.getElementById("main-button"); // Main Button

document.getElementById("button-text").addEventListener("input", function () {
  let buttonTextInput = document.getElementById("button-text").value; // Get input value
  button.textContent = buttonTextInput;
});

function updateTextInput(val, id) {
  document.getElementById(id).value = val;
}

document.getElementById("font-size").addEventListener("change", function () {
  let fontSize = document.getElementById("font-size").value; // Get input value
  button.style.fontSize = fontSize;
});

document.getElementById("font-weight").addEventListener("change", function () {
  let fontWeight = document.getElementById("font-weight").value; // Get input value
  button.style.fontWeight = fontWeight;
});

document
  .getElementById("radius-slider")
  .addEventListener("change", function () {
    let borderRadius = document.getElementById("radius-slider").value;
    button.style.borderRadius = borderRadius + "px";
  });

document.getElementById("slider-x").addEventListener("change", function () {
  let xSlider = document.getElementById("slider-x").value;
  button.style.paddingInline = xSlider + "px";
});

document.getElementById("slider-y").addEventListener("change", function () {
  let ySlider = document.getElementById("slider-y").value;
  button.style.paddingBlock = ySlider + "px";
});
