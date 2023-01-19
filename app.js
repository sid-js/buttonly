let button = document.getElementById("main-button"); // Main 
let buttonTextInput = "Get Started"

document.getElementById("button-text").addEventListener("input", function () {
  buttonTextInput = document.getElementById("button-text").value; // Get input value
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


document.getElementById("button-color").addEventListener("input",function() {
  let buttonColor = document.getElementById("button-color").value;
  button.style.backgroundColor = buttonColor;
})

document.getElementById("button-color-text").addEventListener("input",function() {
  let buttonTextColor = document.getElementById("button-color-text").value;
  button.style.color = buttonTextColor;

})


const getCSS = () => {
  var targetDOMElement = document.querySelector("#main-button");
var targetObjsStyles = window.getComputedStyle(targetDOMElement);
console.log('ORIGINAL SET (' + Object.keys(targetObjsStyles).length + ' rules):',targetObjsStyles)

var tempCopyOfTarget = document.createElement(targetDOMElement.tagName);
document.body.insertAdjacentElement('afterBegin', tempCopyOfTarget);

var basicElementsCSS = window.getComputedStyle(tempCopyOfTarget);
console.log('BASELINE (DUMMY OBJECT) SET (' + Object.keys(basicElementsCSS).length + ' rules):',basicElementsCSS)

var cleanSetOfStyles = {};
Object.entries(targetObjsStyles).forEach(p=>{
    if(basicElementsCSS[p[0]] !== p[1]){ 
        cleanSetOfStyles[p[0]] = p[1];
    }

});
console.log(cleanSetOfStyles)
const finalCSS = `.main-button {
  background-color: ${cleanSetOfStyles.backgroundColor};
  color: ${cleanSetOfStyles.color};
  font: ${cleanSetOfStyles.font};
  padding: ${cleanSetOfStyles.padding};
  border-radius: ${cleanSetOfStyles.borderRadius};
}`

navigator.clipboard.writeText(finalCSS);
tempCopyOfTarget.remove()
}

const getHTML = () => {
  const finalHTML = `
  <button class="main-btn" id="main-button">
  ${buttonTextInput}
</button>`
navigator.clipboard.writeText(finalHTML);
}