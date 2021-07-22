const listA = [1,2,3,4,5];

    function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
const listB = [1,2,3,4,5];

  function myArrayMin(arr) {
  return Math.min.apply(null, arr);

}
document.getElementById("Q13a").innerHTML = myArrayMax(listA);
  document.getElementById("Q13b").innerHTML = myArrayMin(listB);
