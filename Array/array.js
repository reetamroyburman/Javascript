
// JavaScript Array length
// The length property returns the length (size) of an array:
let variable = ["var1", "var2", "var3", "var4"];
let size = variable.length;
console.log(size);

// JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let finaltoString = fruits.toString();
console.log(finaltoString);

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let finalf2 = fruits.join(" * ");
console.log(finalf2);


// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// This is what popping and pushing is:
// Popping items out of an array, or pushing items into an array.
// JavaScript Array pop()
// The pop() method removes the last element from an array:
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();
console.log(fruits3);

// The pop() method returns the value that was "popped out":
let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let finalf4 = fruits4.pop();
console.log(finalf4);

// JavaScript Array push()
// The push() method adds a new element to an array (at the end)
// The push() method returns the new array length
let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.push("Kiwi");
console.log(fruits5);
let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits6.push("Kiwi");
console.log(fruits6);

// Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of the last.
// JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.shift();
console.log(fruits7);

// The shift() method returns the value that was "shifted out":
let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let finalf8 = fruits8.shift();
console.log(finalf8);


// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
let fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.unshift("Lemon");
console.log(fruits10);

// The unshift() method returns the new array length:
let fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11.unshift("Lemon");
console.log(fruits11);


// Changing Elements
// Array elements are accessed using their index number:
// Array indexes start with 0:
// [0] is the first array element
// [1] is the second
// [2] is the third ...
let fruits12 = ["Banana", "Orange", "Apple", "Mango"];
fruits12[0] = "Kiwi";
console.log(fruits12);

// JavaScript Array length
// The length property provides an easy way to append a new element to an array:
let fruits13 = ["Banana", "Orange", "Apple", "Mango"];
fruits13[fruits.length] = "Kiwi";
console.log(fruits13);

// JavaScript Array delete()
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.
let fruits14 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits14[0];
console.log(fruits14);


// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];

let myChildren = myGirls.concat(myBoys);
console.log(myChildren);
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments:
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
let myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2);

// The concat() method can also take strings as arguments:
let arr12 = ["Emil", "Tobias", "Linus"];
let myChildren3 = arr1.concat("Peter");
console.log(myChildren3); 

// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
let myArr = [[1,2],[3,4],[5,6]];
let newArr = myArr.flat();
console.log(myArr);
console.log(newArr);

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
// JavaScript Array splice()
// The splice() method can be used to add new items to an array:
let fruits15 = ["Banana", "Orange", "Apple", "Mango"];
fruits15.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits15);

// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):
let fruits16 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1);
console.log(citrus);
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.