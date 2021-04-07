const load= require('lodash');  //it is external module used to merge array

const item=[1,[2,[3,[4,[5]]]]];
const result=load.flattenDeep(item);
const y=1.2;
console.log(`${result}`)
console.log(typeof(y));