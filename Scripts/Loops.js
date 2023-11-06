

import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";

export default () => {



    ///////////////////////////   @s  For Loop Contiune Omits #3


    for (let i = 1; i < 5; i++) {
        if (i === 3) continue
        // console.log(i);
    }



    ///////////////////////////   @s Loop Array   

    for (const [index, value] of array.entries()) {
        // You can log the index and the item of the index
        // console.log(index + '--' + value);
    }





    ///////////////////////////  @s Loop Objects   

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            // You can log the Key and The value Of the object
            // console.log( key + ':' + object[key] );
        }
    }






    ///////////////////////////  @s Loop Object Iteration 

    let emptyArray = []

    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const value = object[key];
            const k = key

            // Here you can loop through Each Key or/and Each Value
            // value === "Print" ? console.log('yes') : console.log('no');
            emptyArray.push({ [k]: value })
        }
    }

    // console.log(emptyArray);







    ///////////////////////////   @s Loop Array Of Objects

    let count = arrayOfObjects.length;
    for (let i = 0; i < count; i++) {
        // console.log(a[i]);
        if (arrayOfObjects[i].color == 'yellow') {
            break;
        }
    }







    array.forEach((value, index, arr) => {
        // console.log("value: " + value + " at index: " + index + " in the array: " + arr);
        // --- returns a function
    });





    ///////////////////////////  @s Create Array of Objects using For Loop



    function createArrayOfObjects(length) {
        let arr = [];
        for (let i = 0; i < length; i++) {
            let randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
            let obj = { value: randomNumber };
            arr.push(obj);
        }
        return arr;
    }

    let length = 300;
    let arrayOfObjects2 = createArrayOfObjects(length);
    // console.log(arrayOfObjects2);






    ////////////////////////////////////   @s Count the number of True values in --- Array Of Objects ---






    let trueValuesLenght = arrayOfObjects => arrayOfObjects.filter(item => Object.values(item).every(Boolean)).length









    ////////////////////////////////////   @s Count the number of true / false values in an Array of Objects


    let obj = [
        {
            isMarried: true
        },
        {
            isMarried: false
        },
        {
            isMarried: true
        },
        {
            isMarried: true
        },
        {
            isMarried: false
        }
    ]


    // Frist Options By Loops

    
    function numberOfArrayOfObjectsTrueValues(arrayOfObjects, key) {
        let counter = 0;
        for (let index = 0; index < arrayOfObjects.length; index++) {
            if (arrayOfObjects[index][key] === true) {
                counter++;
            }
        }
        return counter;
    }

    function numberOfArrayOfObjectsFalseValues(arrayOfObjects, key) {
        let counter = 0;
        for (let index = 0; index < arrayOfObjects.length; index++) {
            if (arrayOfObjects[index][key] === false) {
                counter++;
            }
        }
        return counter;
    }


    // console.log(numberOfArrayOfObjectsTrueValues(obj, "isMarried"));
    // console.log(numberOfArrayOfObjectsFalseValues(obj, "isMarried"));


    // Second Options by Filter

    let numberOfArrayOfObjectsTrueValues2 = (object, key) => object.filter(item => item[key]).length
    let numberOfArrayOfObjectsFalseValues2 = (object, key) => object.filter(item => !item[key]).length


    // console.log(numberOfArrayOfObjectsTrueValues2(obj, 'isMarried'));
    // console.log(numberOfArrayOfObjectsFalseValues2(obj, "isMarried"));









    ////////////////////////////////////   @s Find False values from Array and Index Number

    let findAllFalseValuesInArray = array => {

        let emptyArray = []
        for (const [index, value] of array.entries()) {
            if (value == false) { emptyArray.push({ [index]: value }) }
            if (value == undefined) { emptyArray.push({ [index]: value }) }
            if (Number.isNaN(value)) { emptyArray.push({ [index]: value }) }

        }
        return emptyArray

    }

    // console.log(findAllFalseValuesInArray(array));








    ////////////////////////////////////   @s Find False values from --- Array of Objects--- and Index Number

    let findAllFalseValuesInArrayOfObjects = arrayOfObjects => {
        let emptyArray = []
        arrayOfObjects.map((object, index) => {
            for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                    const k = key
                    const value = object[key];
                    if (value == undefined) { emptyArray.push({ [index]: { [k]: value, ...object } }) }
                    if (value == false) { emptyArray.push({ [index]: { [k]: value, ...object } }) }
                    if (Number.isNaN(value)) { emptyArray.push({ [index]: { [k]: value, ...object } }) }
                }
            }
        })

        return emptyArray
    }

    // console.log(findAllFalseValuesInArrayOfObjects(arrayOfObjects));





    ///////////////////////////// --- @s Finds False Values in Products API



    let fetchProducts = async () => {

        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await response.json()



        // Adding Ramdomly falsy values

        data[100].price = false
        data[200].price = undefined
        data[50].price = null
        data[22].price = 'string'




        // Finding The falsy values

        let emptyArray = []

        data.map((object, index) => {
            for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                    const k = key
                    const value = object[key];

                    if (value == undefined) { emptyArray.push({ [index]: { [k]: value, ...object } }) }
                    if (value == false) { emptyArray.push({ [index]: { [k]: value, ...object } }) }
                    if (Number.isNaN(value)) { emptyArray.push({ [index]: { [k]: value, ...object } }) }

                }
            }
        })


        return emptyArray


    }



    // console.log(await fetchProducts());


    
    
    
    



    ////////////////////////////////////   @s Remove All False Values From --- Array of Objects ---


    let removeAllFalseValuesFromArrayOfObjects = arrayOfObjects => arrayOfObjects.filter(item => Object.values(item).every(Boolean))



    // console.log(removeAllFalseValuesFromArrayOfObjects(arrayOfObjects));

    
    







}