const num1 = 10
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}
function test() {
  console.log(' this function shows when we dont specify a specific function to export, on import whole code will be imported and called functions will run automatically')
}
addValues()    //here we are calling the function and when we import this module anywhere it will run the whole code in this file.
test()
//module.export= addValues //method 1 to import a function without calling it to execute
//module.export= addvalues() -method to import funtion in called form on import it will be executed itself.
