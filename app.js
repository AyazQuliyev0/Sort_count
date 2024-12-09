function sortByBirth(arr) {
    return arr.sort((a, b) => {
        let birthYearA = parseInt(a.split(",")[1].trim());
        let birthYearB = parseInt(b.split(",")[1].trim());
        return birthYearA - birthYearB;
    });
}
let people = [
    "Ayaz, 2009",
    "Araz, 2012",
    "Murad, 2000",
    "Feqan, 2008"
];

let ans = sortByBirth(people);
console.log(ans);


let nums = [3, 5, 8, 10, 13, 20, 35];
function countNums(arr2) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2 === 0) even++;
        else odd++;
    }

    return [even, odd];
}
const [evenCount, oddCount] = countNums(nums);
console.log(evenCount);
console.log(oddCount);