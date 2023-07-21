
import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";


export default () => {






    /////////////////////////  @s Round any number to Decimal

    let test = Math.round((1189.5799 + 0.00001) * 100) / 100
    // console.log(test);


    ///////////////////////////////////// @s ...REST & SPREAD



    let spread = array;



    ///////////////////////////  @s Destructuring With Rest

    const { id, country, city, ...userNoAddress } = user;


    // console.log(userNoAddress);





    ///////////////////////////    ADD LINES TO PHONE     ///////////////////////////

    let addPhoneLinesASingleString = phoneNumber =>
        phoneNumber
            .replaceAll(/[^\d]+/g, '')
            .substr(-10)
            .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')

    let addPhoneLinesToArrayOfStrigns = phoneNumbers =>
        phoneNumbers.map(number => number
            .replaceAll(/[^\d]+/g, '')
            .substr(-10)
            .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));










    ///////////////////////////  @s Rest & Spread at the Same Time

    const restAndspread = (...rest /*console.log(rest)  */) => restAndspread(...spread, 1, 2, 4, 5, "5", "8");








    ///////////////////////////   @s Insert Array into Function Arguments

    let arrayForFunction = [0, 1, 2, 'test'];

    let first = (...args) => args;                       // Returns [Array]
    let second = (...args) => ({ ...args });             // Returns {ArrayLike Object} = {index : value}
    let third = (...args) => { return { ...args } };     // Returns {Object : [Array]}



    //console.log(first(...arrayForFunction));  // Returns ---> [ 0, 1, 2, 'test' ]
    //console.log(second(...arrayForFunction)); // Returns ---> { '0': 0, '1': 1, '2': 2, '3': 'test' }
    //console.log(third(arrayForFunction));     // Returns ---> { '0': [ 0, 1, 2, 'test' ] }









    ///////////////////////////   @s Return Array from Function

    let calculate = (a, b) => {
        const add = a + b
        const substract = a - b
        const multiply = a * b
        const divide = a / b

        return [add, substract, multiply, divide]
    }

    const [add, substract, multiply, divide] = calculate(4, 7)









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



    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = await /response.json()










    ////////////////////////////////////   @s Remove All False Values From --- Array of Objects ---


    let removeAllFalseValuesFromArrayOfObjects = arrayOfObjects => arrayOfObjects.filter(item => Object.values(item).every(Boolean))



    // console.log(removeAllFalseValuesFromArrayOfObjects(arrayOfObjects));







    ///////////////////////////   @s Shuffle Numbers


    let shuffleNumbers = arrayOfNumbers => arrayOfNumbers.sort(() => Math.random() - 0.5)


    // console.log(shuffleNumbers(arrayOfNumbers));




    ///////////////////   @s Markup Formula

    let cost = 60
    let price = 100
    let profit = price - cost
    let markupPercentage = profit / cost
    let percentage = markupPercentage * 100


    // console.log(`Profit ${profit}`);
    // console.log(`MarkupPercentage % ${markupPercentage.toFixed(2)}`);
    // console.log(`Percentage % ${percentage/* .toFixed(2) */}`);


    /////////////////// @s FIND LAST INSERTED DOCUMENT

    // Orders.findOne({}, { sort: { _id: -1 } }).then((result) => { })





    // MongoDb Example
    // let mongoAggregationQuery = [
    //     { $sort: { dateAdded: -1 } },
    //     // These 2 add Fields are for converting String to ObjectIds
    //     { $addFields: { "convertedId": { "$toObjectId": "$customerId" } } },
    //     { $addFields: { "convertedOrders": { $map: { input: "$orders", "in": { "$toObjectId": "$$this" } } } } },
    //     { $lookup: { from: "Customers", localField: "convertedId", foreignField: "_id", as: 'customerInfo' } },
    //     { $lookup: { from: "Orders", localField: "convertedOrders", foreignField: "_id", as: 'ordersInfo' } }
    // ]





    /* @s Change String to URI to protect Image link */

    let img = "https://paperboxideas.com/wp-content/uploads/2021/01/Spanish.svg"
    // console.log(Buffer.from(img).toString('base64'));
    // console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))
    // let uri = Buffer.from(img).toString('base64')
    // console.log(uri);
    // let back = Buffer.from(uri, 'base64').toString('ascii')
    // console.log(back);

    // < img src = "https://drive.google.com/uc?export=view&id=1TUJxcxK3IJeuq7_wJdSMopWzaQzM278q" width = "600" >








}