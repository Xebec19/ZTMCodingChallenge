/*Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.*/
console.clear();
const sampleHEX = /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const sampleRGB = /^(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/;
const checkHEX = (string) => {
  let result = sampleHEX.exec(string);
  return result;
};
const checkRGB = (string) => {
  let result = sampleRGB.exec(string);
  return result;
}
const convertHEX = (h) => {

  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  console.log("rgb("+ +r + "," + +g + "," + +b + ")");

};
const convertRGB = (string) => {
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(0, 51, 255));

}
const checkAll = (string) => {
  let flagHEX = checkHEX(string);
  let flagRGB = checkRGB(string);
  if(!flagHEX)
    {
      console.log(string+" is not a HEX!");
    }
  else{
    console.log("Yes! "+string+" a HEX");
    convertHEX(string);
  }
  if(!flagRGB)
    {
      console.log(string + " is not a RGB!");
    }
  else{
    console.log("Yes! "+string+" is a RGB");
    convertRGB(string);
  }
};
checkAll("#AA3535");
checkAll("rgb(255,255,255)");
