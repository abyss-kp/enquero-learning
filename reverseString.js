var str="1234"

function reverseString(s) {
    try {
        s = s.split("")
        s.reverse();
        s = s.join("")
        console.log(s);
    }
    catch (e) {
        console.log("s.split is not a function");
        console.log(s);
    }
}

reverseString(str);