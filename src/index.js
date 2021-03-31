import { sum } from './sum.js';
import sampleText from './sample.txt';
// const { sum } = require('./sum.js');

console.log('Hello World 1');
console.log(sampleText);
const verybigVarName1 = Number(prompt('First Number'));
const verybigVarName2 = Number(prompt('Second Number'));
console.log(
  `Sum of ${verybigVarName1}, ${verybigVarName2} is ${sum(
    verybigVarName1,
    verybigVarName2
  )}`
);
