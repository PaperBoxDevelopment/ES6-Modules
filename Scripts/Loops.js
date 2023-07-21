

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






    ///////////////////////////  @s Loop Object letiation  

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


    ///////////////////////////  @s Speed Test Between  Reduce and ForOf Loop   


    // ForOf Time


    // console.time()

    let start = 0


    for (const obj of arrayOfObjects2) {
        let { value } = obj

        start += isNaN(value) ? 0 : value;

    }
    // console.timeEnd()






    // Reduce Time

    // console.time()

    let reduceMethod = arrayOfObjects2.reduce((acc, { value }) => acc + (isNaN(value) ? 0 : value), 0)

    // console.timeEnd()





}