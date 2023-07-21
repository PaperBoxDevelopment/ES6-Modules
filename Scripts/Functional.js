

import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";

export default () => {


    //  Create an Array of a thousend items
    const data = [...Array(100).keys()]

    //////////////////////////////////////// MANUAL HIGHER ORDER FUNCTIONS  ////////////////////////////////////////

    // Function Time Performance

    const myPut = (text, name, tStart, tEnd) => { console.log(`${name} - ${text} - ${text} ${tEnd - tStart} ms`) }

    let myGet = () => performance.now()

    const addTiming = (fn, getTime = myGet, output = myPut) => (...args) => {

        let tStart = getTime()
        try {
            const valueToReturn = fn(...args)
            output('normal exit', fn.name, tStart, getTime())
            return valueToReturn
        } catch (error) {
            output('Exception Thrown', fn.name, tStart, getTime())
            throw error
        }

    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const forEach = (array, fn) => {
        for (const i of array) fn(i);
    };

    const map = (array, fn) => {
        let copy = [];
        for (let i = 0; i < array.length; i++) {
            let original = array[i];
            let modified = fn(original);
            copy[i] = modified;
        }
        return copy;
    };

    const forEachObject = (obj, fn) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                fn(property, obj[property]);
            }
        }
    };

    const unless = (predicate, fn) => {
        if (!predicate) fn();
    };

    const times = (times, fn) => {
        for (let i = 0; i < times; i++) {
            fn(i)
        }
    };

    const every = (array, fn) => {
        let result = true;
        for (const i of array)
            result = result && fn(i);
        return result;
    };

    const some = (array, fn) => {
        let result = false;
        for (const i of array) result = result || fn(i);
        return result;
    };

    // it shows you the old value and the modified one for debuggin
    const tap = (value) => (fn) => (
        typeof fn === "function" && fn(value), console.log('Old Value ' + value)
    );

    const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));

    const once = (firstFn, secondFn) => {
        let done = false;

        // if (!done) { done = true, firstFn(...args) }
        // else { secondFn(...args) }

        return (...args) =>
            done ? secondFn(...args) : ((done = true), firstFn.apply(this, args));
    };


    const memoized = (fn) => {
        let cache = {}
        return x => (x in cache ? cache[x] : (cache[x] = fn(x)))
    }


    //////////////////////////////////////// APPLICATIONS  ////////////////////////////////////////

    // forEach(array,(data) => console.log(data))


    // funcs.foreEachObject(obj, (k,v) => {console.log(k + ':' + v);})

    // forEach(arr, (number) => { unless((number % 2), () => { console.log(number, ' is even'); })})

    // times(arr, (n) => { unless( n%2, () => {console.log(n, ' is even') }) })

    // tap(arr)(it => console.log(it.map(item => item + 1)))

    // forEach( arr,a =>  tap(a) ( () =>  console.log('the Value is', a) ) )

    /* 
      
      let doPayment = once(() => console.log('Payment is Done'), () => console.log('Error Payment can not be done twice'))
      
          doPayment()
          doPayment() 
          
          */


    //     function fib(n) {
    //         if (n == 0) { return 0 }
    //         else if (n == 1) { return 1 }
    //         else { return fib(n - 2) + fib(n - 1) }
    //     }

    //     function factorial(n) {
    //         if (n === 0) { return 1 }
    //         return n * factorial(n - 1)
    //     }

    // factorial = memoized(factorial)
    //     fib = memoized(fib)

    //     addTiming(fib)(44)
    //     addTiming(fib)(40)
    //     addTiming(fib)(35)

    //     addTiming(factorial)(44)
    //     addTiming(factorial)(40)
    //     addTiming(factorial)(35)





    // console.time();

    // data.forEach((item) => {
    //     // console.log(item);
    // })

    // for (let i = 0; i < data.length; i++) {
    //     const element = data[i];
    //     // console.log(element);
    // }
    // console.timeEnd()








}