
const list1 = [1, 2, 3, 4];
function empty1() {

    list1 = [];
}

const  list2 = [1, 2, 3, 4];
function empty2() {

    list2.length = 0;
}
document.getElementById("Q12a").innerHTML=(empty1(list1=[3]));
document.getElementById("Q12b").innerHTML=(empty2(list2=[2]));
