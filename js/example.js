// const stringChecker1 = function (s, p1, p2) {
//     let sIndex = 0;
//     let p1Index = 0;
//     let p2Index = 0;

//     while (sIndex < s.length) {
//         if (p1Index < p1.length && s[sIndex] === p1[p1Index]) {
//             p1Index++;
//         } else if (p2Index < p2.length && s[sIndex] === p2[p2Index]) {
//             p2Index++;
//         } else {
//             return false;
//         }
//         sIndex++;
//     }
//     if (p1Index === p1.length && p2Index === p2.length) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(stringChecker1("Radency", "rdnc", "aey"));
// console.log(stringChecker1("characteristic", "chrctrstc", "aaeii"));
// console.log(stringChecker1("example", "emle", "xap"));
// console.log(stringChecker1("aXsHhsHkvgWk86Q8F79", "sgkQ9", "aXsHhHkvW868F7"));
// console.log(stringChecker1("w27y7", "27", "w7y"));

// const stringChecker2 = function (s, p1, p2) {
//     let sIndex = 0;
//     let p1Index = 0;
//     let p2Index = 0;

//     while (sIndex < s.length) {
//         if (p1Index < p1.length && s[sIndex] === p1[p1Index]) {
//             p1Index++;
//         } else if (p2Index < p2.length && s[sIndex] === p2[p2Index]) {
//             p2Index++;
//         } else if (p1Index < p1.length) {
//             p1Index++;
//         } else if (p2Index < p2.length) {
//             p2Index++;
//         } else {
//             return false;
//         }
//         sIndex++;
//     }
//     if (p1Index === p1.length && p2Index === p2.length) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(stringChecker2("radency", "rdnc", "aey")); // true
// console.log(stringChecker2("characteristic", "chrctrstc", "aaeii")); // true
// console.log(stringChecker2("example", "emle", "xap")); // true
// console.log(stringChecker2("aXsHhsHkvgWk86Q8F79", "sgkQ9", "aXsHhHkvW868F7")); // true
// console.log(stringChecker2("w27y7", "27", "w7y")); // true
// console.log(stringChecker2("q4mmS3xy1577bYD5H7b", "Sqmm34xy1", "HbbY757D75")); // false
// console.log(stringChecker2("c3S4lF2 2nwSE4l7DqZ", "FS2c423 l", "nwSE4l7DqZ")); // false
// console.log(stringChecker2("767ZvpPqp7yt98DfOGY", "767ZvpPqp", "89yOtfYDG7")); // false
// console.log(stringChecker2("radency", "rade", "nyc")); // false

const stringChecker = function (s, p1, p2) {
    if (s.length !== p1.length + p2.length) {
        return false;
    }
    if (s === "") {
        return true;
    }
    let formedByS = false;
    if (p1.length > 0 && s[0] === p1[0]) {
        formedByS = formedByS || stringChecker(s.slice(1), p1.slice(1), p2);
    }
    if (p2.length > 0 && s[0] === p2[0]) {
        formedByS = formedByS || stringChecker(s.slice(1), p1, p2.slice(1));
    }

    return formedByS;
};

console.log("radency", stringChecker("radency", "rdnc", "aey")); // true
console.log(
    "characteristic",
    stringChecker("characteristic", "chrctrstc", "aaeii")
); // true
console.log("example", stringChecker("example", "emle", "xap")); // true
console.log(
    "aXsHhsHkvgWk86Q8F79",
    stringChecker("aXsHhsHkvgWk86Q8F79", "sgkQ9", "aXsHhHkvW868F7")
); // true
console.log("w27y7", stringChecker("w27y7", "27", "w7y")); // true
console.log(
    "q4mmS3xy1577bYD5H7b",
    stringChecker("q4mmS3xy1577bYD5H7b", "Sqmm34xy1", "HbbY757D75")
); // false
console.log(
    "c3S4lF2",
    stringChecker("c3S4lF2 2nwSE4l7DqZ", "FS2c423 l", "nwSE4l7DqZ")
); // false
console.log(
    "767ZvpPqp7yt98DfOGY",
    stringChecker("767ZvpPqp7yt98DfOGY", "767ZvpPqp", "89yOtfYDG7")
); // false
console.log("radency", stringChecker("radency", "rade", "nyc")); // false
console.log("radency", stringChecker("radency", "rade", "ncyy")); // false
console.log(
    "kg 2jShk7jssgzP 31h",
    stringChecker("kg 2jShk7jssgzP 31h", "kg 2jShk7", "jssgzP 31hh")
); // false
