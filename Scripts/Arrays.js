

import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";


export default () => {



    


    ///////////////////////////////// @s Array Methods





    /*


      

    1. Array Modification Methods:
        --- These methods MODIFY the original array

        push()       Adds one or more elements to the end of an array and returns the new length of the array.
        pop()        Removes the last element from an array and returns it.
        shift()      Removes the first element from an array and returns it.
        unshift()    Adds one or more elements to the beginning of an array and returns the new length of the array.
        splice()     Adds, removes, or replaces elements in an array.
        copyWithin() Copies all or part of an array into another array, starting at a specified index.
        fill()       Sets all or part of an array to a specified value.

        --- Sort

        reverse()   Reverses the order of the elements in an array.
        sort()      Sorts the elements in an array in ascending or descending order.


        --- Iterate

        forEach()     Executes a function for each element in an array.


    2. Array Accessor Methods:
        ---These methods access elements or information from the array without modifying it.

        length()         Returns the number of elements in the array.
        concat()         Combines two or more arrays into a new array.
        includes()       Returns true if an array contains a specified value, and false if it does not.
        at()             Takes an integer value and returns the item at that index
        indexOf()        Returns the index of the first occurrence of a specified value in an array, or -1 if the value is not found.
        join()           Converts an array to a string by joining the elements with a specified separator.
        lastIndexOf()    Returns the index of the last occurrence of a specified value in an array, or -1 if the value is not found.
        slice()          Creates a new array that contains a section of the original array.
        toString()       Converts an array to a string by joining the elements with a comma.
        entries()        Returns an array of array-like objects, each of which contains the index and value of each element in the original array.
        toLocaleString() Converts an array to a string using the locale-specific conventions of the current browser.



    3. Array Iteration Methods:
        ---These methods help iterate through the elements of an array.
    
        every()       Executes a function for each element in an array and returns true if the function returns true for all elements.
        some()        Executes a function for each element in an array and returns true if the function returns true for at least one element.
        filter()      Creates a new array with all elements from the original array that pass a test function.
        find()        Returns the first element in an array that passes a test function, or undefined if no element passes the test.
        findIndex()   Returns the index of the first element in an array that passes a test function, or -1 if no element passes the test.
        map()         Creates a new array with the results of calling a function for each element in the original array.
        reduce()      Reduces an array to a single value by calling a function for each element and passing an accumulator as an argument.
        reduceRight() Reduces an array to a single value by calling a function for each element in reverse order and passing an accumulator as an argument.
        flat()        Create a new array with all sub-array elements concatenated recursively to a specified depth.




    4. Array Searching Methods:
        ---These methods search for specific elements or conditions in the array.

        find()          Find the first element in the array that satisfies a condition.
        findIndex()     Find the index of the first element in the array that satisfies a condition.
        findLast()      Iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
        findLastIndex() Iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.



    5. Array Transformation Methods:
        ---These methods create a new array by transforming or extracting data from the original array.


        map()       Create a new array by applying a function to each element of the original array.
        filter()    Create a new array with elements that pass a specific condition.
        reduce()    Reduce the array to a single value using an accumulator and a combining function.
        flatMap()   Map each element using a function, then flatten the result into a new array.


    6. Array Sorting Methods:

        toReverse()   Reverses the order of the elements in an array. ---- RETURNS NEW ARRAY ----
        toSort()      Sorts the elements in an array in ascending or descending order. ---- RETURNS NEW ARRAY ----

    

    
    -----Newest Array Methods:
    

      
    Array.from()     Creates a new array from an iterable object.
    
    Array.of()       Creates a new array from a list of elements.
    
    Array.isArray()  Returns true if an object is an array, and false if it is not.
    

    
            
    
    --- The Array.forEach() method 
    does not return a new array and does not modify the original array. 
    It is used to iterate over the elements of an array and execute a function for each element.

    
    --- The Array.isArray() method 
    is a static method that checks whether a given value is an array and returns a boolean value (true or false). 
    It does not modify the original array and does not return a new array.

    
    --- It's worth noting that while the above methods typically behave as described, 
    some of them can be used in ways that modify the original array or return a new array depending on how they are used. 
    For example, Array.splice() can be used to modify an array in place, and Array.slice() can be used to create a new array.




     */




    ///////////////////////////  ---  @s Reduce --- Find Last Object in Array of Objects 

    function findLastObjectInArrayOfObjects(arrayOfObjects) {
        return arrayOfObjects.pop();
    }




    ///////////////////////////   @s Create Array Of a #### Numbers




    let createArray = quantity => [...Array(quantity).keys()]

    let createArrayFaster = quantity => Array.from({ length: quantity }, (_, index) => index);



    ///////////////////////////   @s Create Array Of Objects With Random Numbers


    let createArrayOfObjects = length => {
        return Array.from({ length }, () => {
            let randomNumber = Math.floor(Math.random() * 100)
            return { value: randomNumber }
        })
    }


    ///////////////////////////   @s Empty An Array   

    // This prevents leaks while doing this dont  --->  array = []

    let emptyThisArray = (arr) => arr.length = 0




    /////////////////////////// @s Remove Duplicates from Array


    let removeDuplicatesArray = (array) => [...new Set(array)]




    /////////////////////////// @s Remove Duplicates from Array Of Objects ( RETURNS ARRAY )


    let removeDuplicatesArrayOfObjectsFromSpecificKey = (arrayOfObjects, key) => [...new Set(arrayOfObjects.map(item => item[key]))]

    let removeDuplicatesArrayOfObjectsFromEntireObject = (arrayOfObjects) => Array.from(new Set(arrayOfObjects.map(JSON.stringify))).map(JSON.parse);




    /////////////////////////// @s Check if all Array Items are Unique 



    let isUnique = array => array.length === new Set(array).size





    /////////////////////////// @s Filter Array



    let filter = (array, value) => array.filter(item => item === value)




    ///////////////////////////   @s Filter / Remove False Values



    let filterFalseValues = array => array.filter(Boolean)
    
    
    


    ///////////////////////////   @s Every   

    // let every = array.every(params => params !== null)
    // console.log(every)


    let every2 = (array, value) => array.every(params => value)



    ///////////////////////////   @s Some   



    let some = (array, value) => array.some(items => items === value)



    ///////////////////////////   @s Find Minimum & Maximun Value in Arr


    let maxValue = (array) => Math.max(...array)
    let minValue = (array) => Math.min(...array)






}