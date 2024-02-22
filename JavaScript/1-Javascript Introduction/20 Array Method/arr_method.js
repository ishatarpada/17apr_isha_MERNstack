let ans = document.getElementById("demo");

const fruits = [" apple ", " mango ", " cherry ", " strawberry "];
ans.innerHTML += "Array is  &#10140;  " + fruits + "<br><br>";

// array length property :- length
let length_arr = fruits.length;
ans.innerHTML += " length of fruits array is  &#10140; " + length_arr + "<br><br>";

// convert array to string :- toString()
const fruits_str = fruits.toString();
ans.innerHTML += " convert the array into the string  &#10140; " + fruits_str + "<br><br>";

// get the element of index number :- at()
ans.innerHTML += " 3rd number element is  &#10140; " + fruits.at(2) + "<br>"
ans.innerHTML += " 3rd number element is  &#10140; " + fruits.at(-3) + "<br><br>"

// joins the array element :- join(parameter)
// this parameter is behave as separator
// in join method " | " it is behave as separator .
ans.innerHTML += fruits.join(" | ") + "<br><br>"; 


// push method is used for the adding the element in last and pop method is used for the removing the element in last.
// push method return the new array length.
// pop method return the removing element.
ans.innerHTML += " array is  &#10140; " + fruits + "<br>"
ans.innerHTML += " now adding the element &#10140 " + fruits.push(" kiwi ")+ "<br>  now arrays is &#10140" + fruits + "<br>";
ans.innerHTML += " now removing the element is &#10140 " + fruits.pop(" kiwi ") + " <br> now arrays is &#10140" + fruits + "<br><br>";


// shift() return the removing element.
// removing the first array element 
ans.innerHTML += " array is  &#10140; " + fruits + "<br>"
ans.innerHTML += " fruits.shift() &#10140 " + fruits.shift() + "<br>" + "now array is &#10140 " + fruits + "<br>";

// unshift() return the array length.
// add the element in  beginning .
ans.innerHTML += " array is  &#10140; " + fruits + "<br>"
ans.innerHTML += " fruits.unshift('kiwi') &#10140 " + fruits.unshift("kiwi") + "<br>" + "now array is &#10140 " + fruits + "<br><br>";


// changing the element.

//1. using the index
ans.innerHTML += " array is  &#10140; " + fruits + "<br>"
fruits[2] = " Pine Apple ";
ans.innerHTML += " fruits[2] =' Pine Apple '  &#10140; " + fruits + "<br><br>"


// 2.using array length.
ans.innerHTML += " array is  &#10140; " + fruits + "<br>"
fruits[fruits.length-3] = " Grapes ";
ans.innerHTML += " fruits[fruits.length-3] = 'Grapes ' &#10140; " + fruits + "<br><br>"


// delete the element
// delete is return the undefined.
// delete() delete the element but leaves the undefined value.
ans.innerHTML += " array is  &#10140; " + fruits + "<br>"
delete fruits[2];
ans.innerHTML += " delete fruits[2] &#10140" + fruits[2] + "<br>"
ans.innerHTML += " delete fruits[2] &#10140" + fruits + "<br><br>"


// merge the array : concat()
// concat() does not change the original array .
//  it always return the new array.
//  in concat() we take any no of argument.
const arr1 = [" isha " , " patel"];
const arr2 = [" 19-11-2002" , " 21"];
const arr3 = [ " Bachelor of Engineering" , " Gecr"];
const merge_arr = arr1.concat(arr2);
const merge_arr1 = arr1.concat(arr2 , arr3);
ans.innerHTML += " arr1.concat(arr2) &#10140 " + merge_arr + "<br>";
ans.innerHTML += " arr1.concat(arr2 , arr3) &#10140 " + merge_arr1 + "<br>";
ans.innerHTML += "arr3.concat(' Computer Engineering ') &#10140 " + arr3.concat("Computer Engineering") + "<br><br>";


// copy array element another position : copyWithin()
//  does not change in the length of array.
// copyWithin(para1 , para2 , para3)
//  where para1 indicate the which position to copy element.
//  para2 indicate copy to elements from which index.
//  para3 indicates the copy the element to which index.
//  copyWithin() change the original array.
fruits[2] = " mango ";
fruits.push(" chary " , " apple ");
ans.innerHTML += " array is  &#10140; " + fruits + "<br>"
ans.innerHTML += "fruits.copyWithin(2 , 0) &#10140;" + fruits.copyWithin(2 , 0) + "<br>";
ans.innerHTML += "fruits.copyWithin(3 , 0) &#10140;" + fruits.copyWithin(3 , 0) + "<br>";
ans.innerHTML += "fruits.copyWithin(4 , 0) &#10140;" + fruits.copyWithin(4 , 0) + "<br>";
ans.innerHTML += "fruits.copyWithin(2 , 0 , 2) &#10140;" + fruits.copyWithin(2 , 0 , 2) + "<br>";
ans.innerHTML += "fruits.copyWithin(3 , 0 , 3) &#10140;" + fruits.copyWithin(3 , 0 , 3) + "<br>";
ans.innerHTML += "fruits.copyWithin(4 , 0 , 4) &#10140;" + fruits.copyWithin(4 , 0 , 4) + "<br><br>";


// flattening is used when we convert a multi-dimensional array into one-dimensional array.
// flat() :- creates a new array with sub-array elements concatenated to a specified depth.
const arr_1 = [[1,2] , [3,4] , [5,6]]
ans.innerHTML += "Two dimensional array is  &#10140; " + arr_1 + "<br>"
const flat_arr = arr_1.flat();
ans.innerHTML += " arr_1.flat()  &#10140; " + flat_arr + "<br><br>"


// Splicing and Slicing Arrays
// splice() method add new element in array.
// slice() method slice the array.
const colors = [" red " , " black " , " white "  , " purple " , " yellow " , " green " , "blue" , " brown "]
ans.innerHTML += " array is  &#10140; " + colors + "<br>"


// splice() :- add the new element.
// splice() method change the original array.
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters define the new elements to be added.
ans.innerHTML += " colors.splice(5 , 0 , ' gray ' , ' orange ') " + colors.splice(5 , 0 , " gray " , " orange");
ans.innerHTML += " array is  &#10140; " + colors + "<br>"

// add element 
ans.innerHTML +=  ' fruits.splice(2 , 3 , "Banana", "Orange", "Apple", "Mango") &#10140;' + fruits.splice(2 , 3 , " Banana ", " Orange ", " Apple ", " Mango ") + "<br>";
ans.innerHTML += " array is  &#10140; " + fruits + "<br>"

// remove element
ans.innerHTML +=  ' fruits.splice(2 , 3 ) &#10140;' + fruits.splice(2 , 3) + "<br>";
ans.innerHTML += " array is  &#10140; " + fruits + "<br><br>"



//toSpliced() method don't change the original array.
const month = [" jan " , " feb " , " march " , " apr "  ,  " may " , " jun " , " july " ,  " aug " , " sep " , " oct " , " nov " , " dec. "];
ans.innerHTML += " original array is  &#10140; " + month + "<br>"
const remove_item = month.splice(4, 2 );
ans.innerHTML += ' now use splice method &#10140; month.splice(4 , 0 ) ' + "<br>"
ans.innerHTML += "new  array is  &#10140; " + month + "<br>"
ans.innerHTML += "remove element is  &#10140; " + remove_item + "<br>"

const days = [" mon " , " tues " , " wed " , " thurs " ,  " sun. "]
ans.innerHTML += " array is  &#10140; " + days + "<br>"
const add_items = days.toSpliced(4, 0 , " fri " , " sat ");
ans.innerHTML += ' now use splice method &#10140; days.toSplice(4, 0 , " fri " , " sat. ") &#10140; ' + add_items + "<br>"
ans.innerHTML += " array is  &#10140; " + days + "<br><br>"


// slice method is used to slice out the items of array into new array.
// slice(para1 , para2) => para1 indicates the which index to slice start. and para2 indicates the which index to slice end.
//  slice method return the new array.
// slice method does not remove the any element from the original array.
ans.innerHTML += " array is  &#10140; " + days + "<br>"
const sliceItem = days.slice(2);
ans.innerHTML += " array is  &#10140; " + sliceItem + "<br>"
const slice_item = days.slice(2 , 4);
ans.innerHTML += " array is  &#10140; " + slice_item + "<br><br>"

// toString()
ans.innerHTML += " array is  &#10140; " + days + "<br>"
ans.innerHTML += " days.toString() &#10140; " + days.toString() + "<br>";
ans.innerHTML += " array is  &#10140; " + days + "<br><br>"
