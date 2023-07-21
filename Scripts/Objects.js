
import { ObjectId } from "mongodb";
import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";

export default () => {



    ///////////////////////////   @s Objects Methods

    /*

    Object.create()
    Object.defineProperties()
    Object.defineProperty()
    Object.entries()
    Object.freeze()
    Object.fromEntries()
    Object.getOwnPropertyDescriptor()
    Object.getOwnPropertyDescriptors()
    Object.getOwnPropertyNames()
    Object.getOwnPropertySymbols()
    Object.getPrototypeOf()
    Object.hasOwn()
    Object.prototype.hasOwnProperty()
    Object.is()
    Object.isExtensible()
    Object.isFrozen()
    Object.prototype.isPrototypeOf()
    Object.isSealed()
    Object.keys()
    Object.preventExtensions()
    Object.prototype.propertyIsEnumerable()
    Object.seal()
    Object.setPrototypeOf()
    Object.prototype.toLocaleString()
    Object.prototype.toString()
    Object.prototype.valueOf()
    Object.values() 
    
    */


    ///////////////////////////   @s Compare  MongoDB Objects with the .equals() Method

    const objectId1 = new ObjectId("6469687cadf19edf56a73af5");
    const objectId2 = new ObjectId("6469687cadf19edf56a73af5");

    // console.log(objectId1 == objectId2); // false
    // console.log(objectId1.equals(objectId2)); // true




    ///////////////////////////   @s Create Array Of Objects with #### Numbers

    let createArrayOfObjects = quantity => Array.from({ length: quantity }, (_, index) => ({ id: index }));




    ///////////////////////////// @s Filter --- Array Of Objects



    let filter = (arrayOfObjects, key) => arrayOfObjects.filter(item => item[key] < 20)




    ///////////////////////////   @s Find --- Finds the value of the first element  only Object



    let find = (object, key, value) => object.find(item => item[key] === value)



    ///////////////////////////   @s Find value in Object



    let frutas = {
        'fresa': '65 calorias',
        'mango': '57 calorias',
        'manzana': '53 calorias'
    }


    let obtenerCalorias = fruta => frutas[fruta] ?? "N/A"


    // console.log(obtenerCalorias('mango'));



    /////////////////////////////  @s Filter --- (Currying)  Array Of Objects By Name or anything you would like /


    const list = [
        {
            id: 100,
            name: 'Steve',
            email: 'steve@example.com',
            eyecolor: "brown"
        },
        {
            id: 200,
            name: 'John',
            email: 'john@example.com',
            eyecolor: "brown"
        },
        {
            id: 300,
            name: 'Pamela',
            email: 'pam@example.com',
            eyecolor: "green"
        },
        {
            id: 400,
            name: 'Liz',
            email: 'liz@example.com',
            eyecolor: "blue"
        },
        {
            id: 500,
            name: 'John',
            email: 'liz@example.com',
            eyecolor: "green"
        }
    ];

    const filtering = (key, value) => item => item[key] === value  // Add !== to exclude certain person

    const filterArrayOfObjectsByKeyAndValue = (arrayOfObjects, key, value) => arrayOfObjects.filter(filtering(key, value));

    // console.log(filterArrayOfObjectsByKeyAndValue(list, 'eyecolor', 'green'));
    // console.log(filterArrayOfObjectsByKeyAndValue(pilots, 'years', 14));




    ////////////////////////////////////   @s Sort --- Array of Objects By String


    let sortArrayOfObjectsByString = (arrayOfObjects) => {

        return arrayOfObjects.sort((item1, item2) => {
            item1 = item1.name.toLowerCase()
            item2 = item2.name.toLowerCase()

            if (item1 < item2) return -1
            if (item1 > item2) return 1
            return 0

        })

    }



    // console.log(sortObjectByString(list));



    ///////////////////////////   @s Join --- Objects or Arrays




    ///////////////////////////   @s Join --- 2 Objects in One Object

    //   Add a copy {} or [] as a First Parameter to ---- Avoid Mutation ----
    let join2Objects = (object1, object2) => Object.assign({}, object1, object2)

    // console.log(join2Objects(user,object));





    ///////////////////////////   @s Join --- 2 Arrays

    let join2Arrays = (array1, array2) => [...array1, ...array2]





    ///////////////////////////   @s Join --- Array & Object with Keys/Value pairs

    // ----Rest Operators DO NOT MUTATE!! ------
    let joinArrayAndObject = (array, object) => ({ ...array, ...object });

    // console.log(joinArrayAndObject(array, object));



    ///////////////////////////   @s Join --- Array & Object in a new Array or new Object

    //   Add  {} or [] as a First Parameter to ---- Avoid Mutation ----
    let joinArrayAndObjectValues = (array, object) => Object.assign({}, array, object)




    ///////////////////////////   @s Join --- 2 Arrays To Object or Array


    let keys = ["Date", "Number", "Size", "Location", "Age"];
    let values = ["2001", "5", "Big", "Sydney", "25"];

    let joinTwoArraysToObject = (keys, values) => values.reduce((acc, cur, index) => {
        acc[keys[index]] = cur
        return acc
    }, {}) // <------ {} or []

    // console.log(joinTwoArraysToObject(keys,values));



    ///////////////////////////   @s Join --- Array of Arrays to Object

    let ArrayOfArrays = [
        ['firstName', 'Muhamad'],
        ['lastName', 'Wasi'],
        ['age', '20'],
    ]

    let arrayOfArraysToObject = array => Object.fromEntries(array)

    // console.log(arrayOfArraysToObject(ArrayOfArrays));


    ///////////////////////////  @s Array to Object



    ///////////////////////////  @s Array to Object With Spread

    let arrayToObjectSpread = array => ({ ...array })




    ///////////////////////////  @s Array to Object With Assign ---- Avoid Mutation ----

    let arrayToObject = array => Object.assign({}, array)




    ///////////////////////////  @s Array to Object With Reduce

    let arrayToObjectReduce2 = array => array.reduce((previous, current) => ({ ...previous, [current]: current }), {})







    ///////////////////////////  @s Object to Array //////////////////////////////////////////////////







    ///////////////////////////   @s Object --- Values to Array

    let objectValuesToArray = object => Object.values(object)



    ///////////////////////////  @s Object --- Keys to Array ------>>>>>> (retrieves ENUMERABLE own properties)


    let objectKeysToArray = object => Object.keys(object)




    ///////////////////////////  @s Object --- Keys to Array ------>>>>>> (retrieve both ENUMERABLE & NON ENUMERABLE)


    let objectKeysToArray2 = object => Object.getOwnPropertyNames(object)




    ///////////////////////////  @s Object to Array & modify values ( RETURNS ARRAY )

    let objectToArray2 = object => Object.values(object).map(key => key)




    ///////////////////////////   @s Object  to  Array - Modify Values then  to Object Again  ( RETURNS OBJECT )



    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
    };

    let objectToArrayToObject = (object) => {

        Object.fromEntries(
            // convert prices to array, map each key/value pair into another pair
            // and then fromEntries gives back the object
            Object.entries(object).map(entry => [entry[0], entry[1] * 2])
        )

    }




    ///////////////////////////   @s Object to Array of Objects


    let objectToArrayOfObjects = object => Object.keys(object).map(key => ({ Key: key, Value: object[key] }))




    /////////////////////////// @s retrieve all (own, enumerable, non enumerable, all prototype level) properties

    let getAllProperties = (obj, props = []) => {
        return obj == null ? props :
            getAllProperties(Object.getPrototypeOf(obj),
                props.concat(Object.getOwnPropertyNames(obj)));
    }

    // console.log(console.log(getAllProperties(object))); 





    ///////////////////////////  @s Find Last Object in Array of Objects


    let findlastObjectInArrayOfObjects = arrayOfObjects => arrayOfObjects.slice(-1)[0];






    /////////////////////////// @s Object Property Description.


    let objectPropertyDescriptor = (object, key) => Object.getOwnPropertyDescriptor(object, [key])





}



