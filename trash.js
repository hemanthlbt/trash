let names  = ["hemanth","jayanth","prashanth","vikram"]
// console.log(names)
let wrap = JSON.stringify(names)
// console.log(wrap)
let unwrap = JSON.parse(wrap)
// console.log(unwrap)


const array = [1,2,3,4,5,6,7,8,9]
const array2 = [100,200,300,400,500,600,700,800]
const array3 = array.concat(array2)
// console.log(array3)

//some of the best examples of the concat() method are.....
// this is to concat a array 
let firstname = ["hemanth"]
let secondname = ["kumar"]
let thirdname = ["lingabathina"]
let name = firstname.concat(secondname,thirdname)
// console.log(name)

// now lets find out how to combine strings.
let fname = "hemanth"
let sname = "kumar "
let tname = "lingabathina"
let fullname = fname+sname+thirdname
console.log(fullname)
//So this is how we add a string...i mean mix a string man.





