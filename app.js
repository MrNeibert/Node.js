const asd = require('lodash');
const items = [1,[2,[3,[4]]]];
const newitems = asd.flattenDeep(items)

console.log(newitems);