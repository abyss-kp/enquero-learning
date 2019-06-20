/**
 * Write a JavaScript program to count number of words in string
 * Remove white-space from start and end position.
 * Convert 2 or more spaces to 1.
 * Exclude newline with a start spacing.
*/
var str = "   kapil pandey     Enquero"
const count = (str) => {
    str = str.replace(/(^\s*)|(\s*$)/, '').replace(/[ ]{2,}/, " ")
    console.log(str.split(' ').length)
}

count(str)
