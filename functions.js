function firstLetterName(name) {
    str = name;
    str.charAt(0);
    alert("The name " + name + " starts with the letter " + str.charAt(0));
}

function divisibleByTwo(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function largestNum(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            num = arr[i];
        }
    }
    return num;
}


firstLetterName("Susan");

divisibleByTwo(6);

largestNum([2,3,4,5,6,7]);
let num = [2,3,4,5,6,7];