
import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";





export default () => {



    // /////////////////////////////// @s String Methods

    // parragraph.search("/[^\w\s]/g")
    // parragraph.split(',')
    // parragraph.indexOf('native')
    // parragraph.replace('a','o')
    // parragraph.charCodeAt(3)
    // parragraph.toUpperCase()
    // parragraph.toLowerCase()
    // parragraph.match('/[A-Z]/g')
    // parragraph.repeat(3)
    // parragraph.charAt(3)
    // parragraph.length



    ///////////////////////////   @s Find --- Specific Letters in a String 

    //   @s Find --- Find Words That Start With the letter A

    function startsWithLetterA(str) {
        if (str && str[0].toLowerCase() == 'a') { return true }
        else { return false; }
    }

    var strArray = parragraph.split(" ");
    var wordsStartsWithA = strArray.filter(startsWithLetterA);



    ///////////////////////////   @s Separate String

    // console.log([...'spreadString']);




    ///////////////////////////   Count Letter Repetitions in --- String ---  ( RETURNS SINGLE OBJECT )





    let string = "⭕⭕⭕🚀🚀  less rockets, more bees"

    let stringReducer = [...string].reduce((acc, letter) => {

        acc[letter] ? ++acc[letter] : (acc[letter] = 1)
        return acc
    }, {})




    ///////////////////   @s  Count Words in a senctence ( Compose )


    let compose = (a, b) => c => a(b(c))
    let arrayLength = array => array.length
    let splitIntoSpaces = str => str.split(' ')
    let countWords = () => compose(arrayLength, splitIntoSpaces)

    // console.log(countWords()(parragraph));










    ////////////////////////////////////   @s String to Array Divided By commas

    let skills = 'html, css, javascript, php'

    let textToArray = Array.isArray(skills) ? skills : skills.split(',').map(skill => '' + skill.trim())















    ////////////////////////////////////   @s Join String into Array & convert string to Number


    let arr = [1, 2, 3, ...[..."456"].map(x => parseInt(x))]; // [ 1, 2, 3, 4, 5, 6 ]

    // console.log(arr);

    let arr2 = [..."123456"].map(x => parseInt(x)); // [1, 2, 3, 4, 5, 6]

    // console.log(arr2);



    let arr3 = [...'12345']



}