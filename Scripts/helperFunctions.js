import colors from "colors";


const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York' // Change to Orlando, Florida time zone
};
export const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: 'America/New_York' // Change to Orlando, Florida time zone
};

const midNightTime = "T12:00:00"



export let formatDate = date => new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date + midNightTime))

export let formatMonth = month => new Intl.DateTimeFormat('en-US', { month: "long", year: "numeric" }).format(new Date(month + midNightTime))



///////////////////////////    All Variable Info     ///////////////////////////

export let info = variable => {

    const s = () => console.log('');

    if (variable) { console.log('/////////////////////////////////////////') }

    if (variable) {
        s()
        console.log(`---- VARIABLE Infromation ----`.yellow);
        s()
    }

    ///////////////////////////////////////////////////////////

    // String
    if (typeof variable === 'string') {
        console.log('Type: ' + 'String'.green);
        console.log('Length: ' + ` ${variable.length}`.green);
    }

    ///////////////////////////////////////////////////////////

    // Array 
    if (Array.isArray(variable)) {
        console.log('Type: ' + 'Array'.green);
        console.log('Length: ' + ` ${variable.length}`.green)
        console.log('False Values: ' + `${variable.filter(item => !item).length}`.red);
    }

    ///////////////////////////////////////////////////////////

    // Number
    if (typeof variable === 'number') {


        console.log('Type: ' + 'Number'.green);
        console.log('Length: ' + ` ${variable.toString().length}`.green);

        if (Number.isInteger(variable)) { console.log('Number-Type: ' + 'Integer'.green); }
        if (isNaN(variable)) { console.log(`Number Type: NaN`); }
    }

    ///////////////////////////////////////////////////////////


    // Object
    if (
        typeof variable === 'object' &&  // It Is typeof object
        !Array.isArray(variable) &&      // And Is Not An Array
        variable !== null &&             // And It Is Not Null
        typeof variable !== 'function'   // And It Is Not a Function
    ) {

        // Verify If It is a Date Object or A Regurlar Object
        if (Object.prototype.toString.call(variable) === "[object Date]") { console.log('Type: ' + 'Date Object'.green); }
        else {
            console.log('Type: ' + 'Object'.green)
            console.log('Porperties Length : ' + `${Object.keys(variable).length}`.yellow);
        }
    }


    ///////////////////////////////////////////////////////////

    //  Function

    if (variable instanceof Function) {



        returnsPromise(variable)
        if (Object.prototype.toString.call(variable) === "[object AsyncFunction]") console.log('Type: ' + 'Async Function'.green);
        if (Object.prototype.toString.call(variable) === "[object Function]") console.log('Type: ' + 'Regular Function'.green);
        console.log('Function Name: ' + `${variable.name}`.green);
        console.log('Function Arguments: ' + `${variable.length}`.green);



    }


    ///////////////////////////////////////////////////////////


    // Print Variable

    if (
        typeof variable === 'object' &&  // It Is typeof object
        !Array.isArray(variable) &&      // And Is Not An Array
        variable !== null &&             // And It Is Not Null
        typeof variable !== 'function'   // And It Is Not a Function
    ) {

        s()
        console.table(variable);
        s()
        console.log('/////////////////////////////////////////');
        s()

    } else if (variable) {
        s()
        console.log(variable);
        s()
        console.log('/////////////////////////////////////////');
        s()
    }


}


///////////////////////////    ADD LINES TO PHONE     ///////////////////////////

export let addPhoneLinesASingleString = phoneNumber =>
    phoneNumber
        .replaceAll(/[^\d]+/g, '')
        .substr(-10)
        .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')

export let addPhoneLinesToArrayOfStrigns = phoneNumbers =>
    phoneNumbers.map(number => number
        .replaceAll(/[^\d]+/g, '')
        .substr(-10)
        .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));

export let addphoneLinesBasic = async (phoneNu) => {
    let phone = await phoneNu.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    return phone
}




///////////////////////////    ROUNDS NUMBERS TO 2 DECIMAL POINTS     ///////////////////////////

export let round = num => {
    let number = Math.round((num + 0.00001) * 100) / 100
    return number
}

export let roundToDecimalPlaces = (num, decimalPlaces = 2) => {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) { throw new Error(`Invalid number: ${num}`); }
    const factor = Math.pow(10, decimalPlaces);
    const rounded = Math.round((parsedNum + 0.00001) * factor) / factor;
    return rounded;
}







// ✅ Promise check
export function isPromise(p) {
    if (typeof p === 'object' && typeof p.then === 'function') return true
    return false;
}

// ✅ Check if return value is promise
export function returnsPromise(f) {
    if (f.constructor.name === 'AsyncFunction' || (typeof f === 'function' && isPromise(f()))) {
        console.log('✅ Function returns promise');
        return true;
    }

    console.log('⛔️ Function does NOT return promise');
    return false;
}

// 👇️ Examples
async function exampleAsync() { }
function example() { }
function examplePromise() { return new Promise(resolve => resolve(42)) }

// console.log(returnsPromise(exampleAsync)); // 👉️ true
// console.log(returnsPromise(example)); // 👉️ false
// console.log(returnsPromise(examplePromise)); // 👉️ true

