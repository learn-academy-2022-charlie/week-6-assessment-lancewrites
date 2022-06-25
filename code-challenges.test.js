// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

describe("data", () => { 
    const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () =>{
    expect(data(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

          // FAIL  ./code-challenges.test.js
          // data
          //   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
          // ● data › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
          //   ReferenceError: data is not defined

  

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.

//Create a function called data that takes in an array of objects
  //Map through the array
    //for each object in the array... return string interpolation with the value of the name key with proper capitalization of the first letters of the first and last names, the word 'is', the value associated with the occupation key, and a period
    




const data = (array) => {
   return array.map(object => {
    return `${object.name.split(" ").map(value => {return value.charAt(0).toUpperCase() + value.slice(1)}).join(" ")} is ${object.occupation}.`
  })
}


          // PASS  ./code-challenges.test.js
          // data
          //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (3 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("modulo3", () => { 
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () =>{
  expect(modulo3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(modulo3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

          // FAIL  ./code-challenges.test.js
          // modulo3
          //   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
          // ● modulo3 › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
          //   ReferenceError: modulo3 is not defined




// b) Create the function that makes the test pass.

//Create a function called modulo3 that takes in an array of mixed data types
  //filter out only the values that have the "number" datatype
  //return a map through the result of the filtering and apply a modulo of three to each of the values

  const modulo3 = (array) => {
    return array.filter(value => {return typeof(value)==="number"}).map(value => {return value % 3})
  }

          // PASS  ./code-challenges.test.js
          // modulo3
          //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)




  // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubedSum", () => { 
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () =>{
  expect(cubedSum(cubeAndSum1)).toEqual(99)
  expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})

          // FAIL  ./code-challenges.test.js
          // cubedSum
          //   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
          // ● cubedSum › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
          //   ReferenceError: cubedSum is not defined



// b) Create the function that makes the test pass.

//Create a function called cubeSum that takes in an array of numbers
  //Map through the array that cubes each values and place the results into a new array
    //return the sum of all of the values in the array containing the cubed values

const cubedSum = (array) => {
  return array.map(value => {return value ** 3}).reduce((a,b) => a + b)
} 

          // PASS  ./code-challenges.test.js
          // cubedSum
          //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
