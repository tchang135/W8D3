// Array.prototype.uniq = function() {
//     let uniqueEle = []
//     for (let i = 0 ;i < this.length;i++) {
//         if (!uniqueEle.includes(this[i])) {
//             uniqueEle.push(this[i])
//         } 
//     }
//     return uniqueEle
// }

// Array.prototype.twoSum = function() {
//     const sums = []
//     for (let i = 0; i < this.length; i++) {
//         for (let j = 0; j < this.length; j++) {
//             if ((j > i) && (this[i] + this[j] === 0)) {
//                 sums.push([i, j]);
//             }
//         }
//     }

//     return sums
// }

Array.prototype.transpose = function() {
    var new_arr = [] 
    for (var i = 0; i < this[0].length; i++) {
        new_arr.push([])
    };
    for (var i = 0; i < this[0].length; i++) {
        for (var j = 0; j < this.length; j++) {
            new_arr[i].push(this[j][i])
        }
    };
    return new_arr
}
