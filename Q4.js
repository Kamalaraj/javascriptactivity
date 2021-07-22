function cuboidVolume(length,width,height){
  let volume = length*width*height;
  return volume;
}
document.getElementById("Q4").innerHTML=(cuboidVolume(4,5,6));
