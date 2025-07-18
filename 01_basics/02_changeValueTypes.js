//number
let score = "100";
console.log(typeof score); // Output: string

let scoreNumber = Number(score); // Convert string to number
console.log(typeof scoreNumber); // Output: number

/* note:
input: "100" => output: number
output: "100abc" => output: NaN (Not a Number)
input true => output: 1
input false => output: 0
*/
