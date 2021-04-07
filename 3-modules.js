// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-grenades')    //if we dont import module into a variable it executes itself we dont need to call it in case of this module we called the function "addvalues()" at the end thats why the function executed itself if we just export the function and dont put brackets "()" means we dont call it it will be imported but wont be called on itself.
sayHi.sayHi('susan')
sayHi.sayHi(names.usama)
sayHi.sayHi(names.ansar)
sayHi.saysalam(data.singlePerson.name)    //called variable declared in person class
sayHi.saysalam(names.usama)                 //if you have imported more than 1 thing you have to choose via object that what you want to call
// i ve ctreated additional fun() and imported both const sayHi