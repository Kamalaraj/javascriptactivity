const fruits = ["Apple","Mango","Banana","Orange","Pineapple"];
  document.getElementById("Q14a").innerHTML=fruits[3];
  document.getElementById("Q14b").innerHTML=fruits.length;


function myFunction() {
  fruits.sort();
  fruits.reverse();
document.getElementById("Q14c").innerHTML = fruits;
}
