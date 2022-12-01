// The forEach() method executes a provided function once for each array element.

const arr = ["Apple","Banana","Milk"];
arr.forEach(check =>{
    console.log(check)
})

// expected output: "a"
// expected output: "b"
// expected output: "c"
console.log("\n")

// instead of this you can use these method.
arr.forEach(element => console.log(element))
