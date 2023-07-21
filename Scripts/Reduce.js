
import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph, listOfEmployees } from "../data.js";

console.log('Reduce in the works');

export default async () => {



    /*    IMPORTANT !!  ⬅️⬅️⬅️⬅️⬅️⬅️⬅️
        
        REMEMBER USE BRACKET [] NOTATION IN REDUCE -> example: object[property]
        IT WILL BE BETTER THAN DOT NOTATION
    
    */



    /*    IMPORTANT !!
    
        If ModifyinG ArrayOfObjects Always return ...Copy, "Modification" :
            If initial value === [] ---- return [ ...acc, {...item, key:value} ]  or   ( acc.push({key:value}); return acc )
            If initial value === {} ---- return { ...acc, key : value }
    
    */


    /*    IMPORTANT !!
            
    
        array.filter(item => item === 0 || Number(item))

        --- Does Not Eliminate 0's ---->
        --- And Eliminates ----->
            
        undefined,
        String,
        False,
        null,
        NaN
        "",
        [],
        {}
            
        
            .filter(Number) --  to get only Numbers and ELIMINATES 0's from Array 
            !isNaN(Key) ?   --  to get Only Numbers from Array Of Objects
            
            
            --  to get Only Numbers from Array Of Objects
        
            // know when to use Number() and !isNaN
            Number(array) -> use in Array 
            !isNaN(array) -> use in Array of Objects
            
    */


    /*    IMPORTANT !!
 
        THE LOGIC INSIDE THE REDUCE WILL BE APPLIED LIKE A CYCLE
        TO EACH ITEM UNTIL THE IT FINISHES ITERATING THE ARRAY
        AND THEN ADDED TO THE ACCUMULATOR IF NEEDED
 
    */




    ///////////////////////////// --- @s Reduce --- Adds up all numbers from --- Array --- ( RETURNS VALUE / NUMBER )

    let addUpAllArrayNumbers = array.reduce((acc, number) => acc + (Number(number) || 0), 0);





    ///////////////////////////// --- @s Reduce --- Adds up all numbers from --- Array Of Objects ---  ( RETURNS VALUE / NUMBER )

    let addUpAllYears = pilots.reduce((acc, { years }) => acc + (isNaN(years) ? 0 : years), 0);






    ///////////////////////////// --- @s Reduce --- Double the amount in --- Array --- ( RETURNS ARRAY )


    // Simple Using Filter

    let doubledSimple = array.filter(Number).reduce((acc, number) => [...acc, number * 2], []);


    // Long Using Filter

    let doublePush = array.filter(Number).reduce((acc, number) => {
        acc.push(number * 2);
        return acc
    }, []);





    // Without Filter Includes Zero

    let doubleIncludeZeros = array.reduce((acc, number) => {
        if (typeof number === 'number' && !isNaN(number)) acc.push(number * 2)
        return acc
    }, [])



    // Without Filter Removes Zero
    let doubleRemoveZero = array.reduce((acc, number) => Number(number) ? acc.concat(number * 2) : acc, [])





    ///////////////////////////// --- @s Reduce --- Double the amount in --- Array Of Objects --- ( RETURNS ARRAY )



    // Shortest


    let doubleYearsShortest = pilots.reduce((acc, pilot) =>
        Number(pilot.years) ? acc.concat({ ...pilot, years: pilot.years * 2 }) : acc, []);



    let doubledSimple3 = pilots.reduce((acc, pilot) => {
        if (typeof pilot.years === 'number' && !isNaN(pilot.years)) acc.push({ ...pilot, years: pilot.years * 2 })
        return acc
    }, [])



    // Short

    let doubleYearsShort =

        pilots
            .filter(pilot => Number(pilot.years))
            .reduce((acc, { years }) => [...acc, years * 2], []);






    // Long

    let doubleYearsLong =

        pilots
            .filter(pilot => Number(pilot.years))
            .reduce((acc, pilot) => {
                acc.push({ name: pilot.name, years: pilot.years * 2 });
                return acc;
            }, []);







    ///////////////////////////// --- @s Reduce --- Find Min Value an --- Array ---  ( RETURNS SINGLE OBJECT )


    // IMPORTANT ---  ➡️➡️Math.min(...array)  ---   TO INCLUDE 0 AS THE MIN NUMBER
    // IMPORTANT ---  ➡️➡️➡️➡️.filter(item => item === 0 || Number(item))   TO INCLUDE 0 AS THE MIN NUMBER


    // Simple


    let minNumSimple = array
        .filter(item => item === 0 || Number(item))
        .reduce((acc, number) => acc < number ? acc : number, Infinity);




    // Long

    let minNumLong = array
        .filter(item => item === 0 || Number(item))
        .reduce((acc, number) => {
            if (acc > number) return number;
            else return acc;
        }, Infinity);


    let minNumNoFilter = array.reduce((acc, number) => {
        if (typeof number === "number" && !isNaN(number)) {
            if (acc > number) return number
            else return acc
        }
        return acc
    }, Infinity)






    ///////////////////////////// ---  @s Reduce --- Find Min Value in an --- Array of Objects ---  ( RETURNS SINGLE OBJECT )




    // IMPORTANT ---  Math.min( ...pilots.map(item => item.years) ) TO INCLUDE 0 AS THE MIN NUMBER


    // Simple

    let rookiePilot = pilots
        .filter(({ years }) => years === 0 || Number(years))
        .reduce((acc, pilot) => acc.years > pilot.years ? pilot : acc, { years: Infinity });



    // Without Filter

    let rookiePilotPerformance = pilots.reduce((acc, pilot) => {

        if ((pilot.years === 0 || Number(pilot.years)) && (!acc.years || acc.years > pilot.years)) return pilot;
        return acc;

    }, {});



    ///////////////////////////// ---  @s Reduce --- Find MAX Value in an --- Array of Objects --- ( RETURNS SINGLE OBJECT 





    // Simple


    let expertPilot = pilots
        .filter(({ years }) => Number(years))
        .reduce((acc, pilot) => acc.years < pilot.years ? pilot : acc, { years: 0 });



    // Without Filter


    let expertPilotPerformance = pilots.reduce((acc, pilot) => {

        if (Number(pilot.years) && (!acc.years || acc.years < pilot.years)) return pilot;
        return acc;

    }, {});






    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








    ///////////////////////////   ---  @s Reduce --- Array to Object   --- ( RETURNS SINGLE OBJECT )

    let arrayToObjectReduce = array.reduce((acc, number) => ({ ...acc, [number]: number }), {})




    /////////////////////////// ---  @s Reduce ---  Convert Array to Array of Objects with default Key

    let arrayToObjectReducee = array.reduce((acc, number) => [...acc, { [number]: number }], []);






    ///////////////////////////// --- @s Reduce --- Array Of Objects to Object --- ( RETURNS SINGLE OBJECT )

    // makes the first value the Key and the second key the new value And eliminates Duplicates

    let arrayOfObjectsToSingleObject = arrayOfObjects.reduce((acc, { name, color }) => ({ ...acc, [name]: color }), {});




    /////////////////////// LOOK FOR THE OTHER NESTED OBJECT A COUPLE LINES DOWN







    ///////////////////////////  --- @s Reduce --- Count Letter Repetitions in --- String ---  ( RETURNS SINGLE OBJECT )



    let string = "⭕⭕⭕🚀🚀  less rockets, more bees"

    let countRepetitionsInString = [...string].reduce((acc, letter) => {

        // acc[letter] ? ++acc[letter] : (acc[letter] = 1) ->> THIS LINE COUNTS NULL AND UNDEFINED REPETITIONS

        // if (letter) acc[letter] = ++acc[letter] || 1;

        // if (letter) acc[letter] = (acc[letter] || 0) + 1
        if (letter) acc[letter] = acc[letter] + 1 || 1
        return acc

    }, {})



    // console.log(countRepetitionsInString);


    ///////////////////////////// --- @s Reduce --- Counts Repetitions in ---  Array ---  ( RETURNS SINGLE OBJECT )

    const fruitBasket = [
        "banana",
        "cherry",
        "orange",
        "apple",
        "cherry",
        "orange",
        "apple",
        "banana",
        "cherry",
        "orange",
        "fig",
        "",
        0,
        false,
        undefined,
        undefined,
        null,
        null,
        NaN,
        [],
        {},
    ];


    let repetitions = fruitBasket.reduce((acc, fruit) => {


        acc[fruit] ? ++acc[fruit] : (acc[fruit] = 1) /* ->> THIS LINE COUNTS NULL AND UNDEFINED REPETITIONS */
        // if (fruit) acc[fruit] = ++acc[fruit] || 1
        // if (fruit) acc[fruit] = (acc[fruit] || 0) + 1;
        // if (fruit) acc[fruit] = acc[fruit] + 1 || 1;
        return acc;

    }, {});



    ///////////////////////////// --- @s Reduce --- Counts Repetitions in ---  Array Of Objects ---  ( RETURNS SINGLE OBJECT )



    //  If Statement eliminates False Values ( RETURNS SINGLE OBJECT )


    let pilotsByEyeColor = pilots.reduce((acc, { eyecolor }) => {


        // acc[eyecolor] ? ++acc[eyecolor] : (acc[eyecolor] = 1) /* ->> THIS LINE COUNTS NULL AND UNDEFINED REPETITIONS */
        // if (eyecolor) acc[eyecolor] = ++acc[eyecolor] || 1
        // if (eyecolor) acc[eyecolor] = (acc[eyecolor] || 0) + 1
        if (eyecolor) acc[eyecolor] = acc[eyecolor] + 1 || 1
        return acc

    }, {})






    ///////////////////////////// ---  @s Reduce --- Remove Duplicates in --- Array

    let arrayOfDuplicates = ["😀", "😀", "😀", "🌎", "🌎", "🚀"]


    let removeDuplicatesArray = arrayOfDuplicates.reduce((acc, item) => {

        if (!acc.includes(item)) acc.push(item)
        return acc
    }, [])




    ///////////////////////////// ---  @s Reduce --- Remove Duplicates in --- Array of Objects --- with filter ( RETURNS ARRAY OF OBJECTS )

    let messages = [
        {

            "timestamp": 1474328370007,
            "message": "hello"
        },
        {

            "timestamp": 1474328302520,
            "message": "how are you"
        },
        {

            "timestamp": 1474328302520,
            "message": "how are you"
        },
        {

            "timestamp": 4568999445566,
            "message": "whatsssaaaapppp"
        },
        {

            "timestamp": 1474328370007,
            "message": "hello"
        },
        {

            "timestamp": 1474324545786,
            "message": "holaaaaa"
        },
        {

            "timestamp": 4585214895555,
            "message": "this is a new message"
        }
    ];


    // Short Version With Some

    let uniqueMessagesSome = messages.reduce((acc, message) => {

        const duplicateMessage = acc.some(duplicate => duplicate.timestamp === message.timestamp);

        if (!duplicateMessage) acc.push(message);

        return acc;
    }, []);






    // Long Version With Filter

    let uniqueMessages2 = messages.reduce((acc, message) => {


        // DuplicateMessages is a combination of arrays 
        // Filter will be applied individualy to each message of the array of objects

        const duplicateMessage = acc.filter(duplicate => duplicate.timestamp === message.timestamp)


        if (duplicateMessage.length === 0) acc.push(message)  // if one of these arrays is empty then push the non duplicated message
        // Then start the cycle again and go to the next message
        // Until you finish Iterating the array

        return acc;


    }, []);









    ///////////////////////////// ---  @s Reduce --- Add SAME Property  to  --- Array Of Objects --- ( RETURNS ARRAY OF OBJECTS )


    // Short Version

    let addSamePropertyToArrayOfObjectsSpread = arrayOfObjects.reduce((acc, pilot) => ([...acc, { ...pilot, "Key": "Value" }]), [])





    // Long Version

    let addSamePropertyToArrayOfObjectsPush = arrayOfObjects.reduce((acc, pilot) => {

        acc.push({ ...pilot, "Key": "Value" })

        return acc
    }, [])




    // If Version ---    If the Items Does not exist it wont be returned in the new Array Of Objects


    let addSamePropertyToArrayOfObjectsEliminatignFalseAndNonNumericals = pilots.reduce((acc, pilot) => {


        const { years } = pilot
        // first If removes values that are not Numbers & 0's
        if (Number(years)) acc.push({ ...pilot, experience: 'Has Experience' })

        return acc
    }, [])







    ///////////////////////////// --- @s Reduce --- Add CONDITIONAL Property to  --- Array Of Objects --- ( RETURNS ARRAY OF OBJECTS )




    let addConditionalPropertyToArrayOfObjectsSpread = pilots.reduce((acc, pilot) => {

        const { years } = pilot

        let object = { ...pilot, level: !isNaN(years) ? years > 20 ? 'pro' : 'rookie' : 'No Level' }

        return [...acc, object]
    }, [])



    let addConditionalPropertyToArrayOfObjectsPush = pilots.reduce((acc, pilot) => {

        const { years } = pilot

        acc.push({ ...pilot, level: !isNaN(years) ? years > 20 ? 'pro' : 'rookie' : 'No Level' })

        return acc
    }, [])


    //  BEST OPTION ⬇️⬇️⬇️⬇️⬇️⬇️----------------------------------------------



    let addConditionalPropertyToArrayOfObjectsEliminatignFalseAndNonNumericals = pilots.reduce((acc, pilot) => {

        const { years } = pilot

        // the first If removes values that are not Numbers & Keep 0's
        if (years === 0 || Number(years)) acc.push({ ...pilot, level: years > 20 ? 'pro' : 'rookie' })

        return acc
    }, [])




    ///////////////////////////////////////////////////// ---- @s GROUP





    ///////////////////////////// ---  @s Reduce --- Group Array Of Objects to NESTED Object  ( RETURNS SINGLE OBJECT )

    // Short

    let nestedSingleObjectFromArrayOfObjectsShort = pilots.reduce((acc, { name, ...rest }) => ({ ...acc, [name]: rest }), {}) // RETURNS  SINGLE OBJECT




    // Long

    let nestedSingleObjectFromArrayOfObjectsLong = pilots.reduce((acc, pilot) => {

        const { name, ...rest } = pilot

        if (name) return { ...acc, [name]: rest }
        return acc



    }, {}) // RETURNS OBJECT




    // console.log(nestedSingleObjectFromArrayOfObjectsLong);





    ///////////////////////////// ---  @s Reduce --- Group Array Of Objects to NESTED Array of Objects  --- Array Of Objects ---  ( RETURNS ARRAY OF OBJECTS )


    // Short

    let nestedArrayOfObjectsFromArrayOfObjectsShort = pilots.reduce((acc, { name, ...rest }) => ([...acc, { [name]: rest }]), [])  // RETUNRS ARRAY OF OBJECTS



    // Long

    let nestedArrayOfObjectsFromArrayOfObjectsLong = pilots.reduce((acc, pilot) => {

        const { name, ...rest } = pilot

        return [...acc, { [name]: rest }]

    }, [])  // RETUNRS ARRAY OF OBJECTS



    // With Push and Conditional

    let nestedArrayOfObjectsFromArrayOfObjectsPush = pilots.reduce((acc, pilot) => {

        const { name, ...rest } = pilot
        if (name) acc.push({ [name]: rest })
        return acc

    }, [])  // RETUNRS ARRAY OF OBJECTS










    ///////////////////////////// ---  @s Reduce --- Group Players By Points Objects in --- Array of Objects --- ( RETURNS SINGLE OBJECT )


    const people = [
        { name: 'Alex', points: 30 },
        { name: 'Max', points: 30 },
        { name: 'sony', points: 20 },
        { name: 'molly', points: 20 },
        { name: 'rex', points: false }
    ];


    let group = people.reduce((acc, { points, ...person }) => {

        // Or Use ----->>>> const { points, ...person } = person , to have the complete object pushed

        if (points) {
            acc[points] = acc[points] || [];
            acc[points].push(person); //---------->  Or "person.name" to only have an array of names 
        }
        return acc;


    }, {})

    // console.log(group);



    /////////////////////////// ---  @s Reduce --- Group Transactions By Name / Creates Nest / Concatenate Doubles   --- Array of Objects from  ---  Array of Objects --- ( RETURNS ARRAY OF OBJECTS )


    const buyers = [
        { amount: 252, date: "2020-04", user: "Bill Gates" },
        { amount: 658, date: "2020-04", user: "Jon Jones" },
        { amount: 789, date: "2020-05", user: "Jon Jones" },
        { amount: 5000.25, date: "2020-05", user: "Bill Gates" },
        { amount: 300, date: "2020-05", user: "Juan Del Pueblo" },
        { user: "Pedro" },
    ];




    // First Option (Not easy to understand but more efficient than the first one)


    const buyersWithTransactions = buyers.reduce((acc, { user, date, amount }) => {


        if (date && amount) {

            const index = acc.findIndex(e => e.user === user);

            if (index !== -1) acc[index].transaction.push({ amount, date })

            else acc.push({ user, transaction: [{ amount, date }] })
        }

        return acc;

    }, []);



    //  BEST OPTION for Performance ⬇️⬇️⬇️⬇️⬇️⬇️----------------------------------------------



    const buyersWithTransactionsMap = buyers.reduce((acc, { user, date, amount }) => {

        if (date && amount) {

            if (acc.has(user)) acc.get(user).transaction.push({ amount, date });

            else acc.set(user, { user, transaction: [{ amount, date }] });

        }

        return acc;

    }, new Map());

    // Convert Map to an array of objects
    const result = Array.from(buyersWithTransactionsMap.values());


    // console.log(...result);






    //  BEST READABLE VERSION ⬇️⬇️⬇️⬇️⬇️⬇️----------------------------------------------

    const buyersWithTransactions3 = buyers
        .filter(({ date, amount }) => date && amount) // Filter out buyers without transactions
        .reduce((acc, { user, date, amount }) => {


            const existingUser = acc.find(e => e.user === user);


            if (existingUser) existingUser.transaction.push({ amount, date });
            else acc.push({ user, transaction: [{ amount, date }] });

            return acc;

        }, []);

    // console.log(...buyersWithTransactions3);





    ///////////////////////////// --- @s Reduce --- Group Find Weapons damage and range from characters in a separate Object --- (RETURNS SINGLE OBJECT)

    const characters = [

        {
            name: 'Avatar',
            profession: 'heroine',
            weapons: ['magebane', 'whip', 'axe'],
            home: 'Earth'
        },

        {
            name: 'Iolo',
            profession: 'bard',
            weapons: ['crossbow', 'axe', 'halbred'],
            home: 'Britannia'
        },

        {
            name: 'Shamino',
            profession: 'ranger',
            weapons: ['bow', 'magebane', 'whip'],
            home: 'Sosaria'
        },

        {
            name: 'Dupre',
            profession: 'paladine',
            weapons: ['axe', 'halbred', 'magebane'],
            home: 'Trinsic'
        },

    ]


    const weapons =

    {

        magebane: {
            damage: 8,
            range: 5
        },

        whip: {
            damage: 10,
            range: 5
        },

        axe: {
            damage: 8,
            range: 16
        },

        crossbow: {
            damage: 10,
            range: 25
        },

        halbred: {
            damage: 10,
            range: 5
        },

        bow: {
            damage: 12,
            range: 31
        },

    }


    let charactersRangeAndDamageRate = characters.reduce((acc, character) => {
        // Starting value
        const { name } = character
        acc[name] = { damage: 0, range: 0 }

        // Loop through each characters weapons array
        character.weapons.map(weapon => {
            // /////////////////////////// go trough the weapos object
            acc[name].damage += weapons[weapon].damage
            acc[name].range += weapons[weapon].range

        });

        return acc

    }, {})




    // console.log(charactersRangeAndDamageRate);









    ///////////////////////////// --- @s Reduce --- Group by ID's and Sums The area. and with map Joins Reducer with Array --- (RETURNS SINGLE OBJECT)



    const paddockType = [
        { id: 1, name: 'PALTOS' },
        { id: 2, name: 'AVELLANOS' },
        { id: 3, name: 'CEREZAS' },
        { id: 4, name: 'NOGALES' },
    ]
    const paddocks = [
        { id: 1, harvestYear: 2019, area: 1200 },
        { id: 4, harvestYear: 2019, area: 500 },
        { id: 2, harvestYear: 2020, area: 20000 },
        { id: 3, harvestYear: 2021, area: 8401 },
        { id: 1, harvestYear: 2020, area: 2877 },
        { id: 2, harvestYear: 2017, area: 15902 },
        { id: 2, harvestYear: 2018, area: 1736 },
        { id: 3, harvestYear: 2020, area: 2965 },
        { id: 4, harvestYear: 2018, area: 1651 },
        { id: 1, harvestYear: 2018, area: 700 },
        { id: 1, harvestYear: 2019, area: 7956 },
        { id: 2, harvestYear: 2020, area: 3745 },
        { id: 3, harvestYear: 2021, area: 11362 },
        { id: 3, harvestYear: 2021, area: 300 },
        { id: 2, harvestYear: 2020, area: 19188 },
        { id: 1, harvestYear: 2019, area: 17137 },
        { id: 2, harvestYear: 2020, area: 100 },
        { id: 3, harvestYear: 2019, area: 11845 },
        { id: 1, harvestYear: 2018, area: 15969 },
        { id: 1, harvestYear: 2029, area: 10420 },
        { id: 3, harvestYear: 2010, area: 3200 },
        { id: 2, harvestYear: 2012, area: 10587 },
        { id: 2, harvestYear: 2018, area: 16750 }
    ];




    let reduceArrayToObject = paddocks.reduce((acc, { id, area }) => {

        if (id) acc[id] = acc[id] || 0
        acc[id] = acc[id] + area
        acc.totaTreesArea += area

        return acc

    }, { totaTreesArea: 0 })



    // console.log(reduceArrayToObject);

    let sumsEachTreeArea = paddockType.map(item => ({ ...item, total: reduceArrayToObject[item.id] }))



    // console.log(sumsEachTreeArea);



    // /////////////////////// Much Better Version ⬇️⬇️⬇️⬇️⬇️⬇️


    ///////////////////////////// --- @s Reduce --- Group 2 Arrays Of Objects By by ID's --- ( RETURNS ARRAY OF OBJECTS )


    let groupArraysOfObjectsByID = paddockType.reduce((acc, item) => {


        let listOfPaddocks = paddocks.filter(paddock => paddock.id === item.id)
        let totalArea = listOfPaddocks.reduce((acc, { area }) => acc + area, 0)

        if (listOfPaddocks) acc.push({ ...item, totalArea, listOfPaddocks })


        return acc
    }, [])

    // console.log(...groupArraysOfObjectsByID);







    ///////////////////////////// ---  @s Reduce --- Groups Object with an Initial Value --- Array Of Objects --- ( RETURNS SINGLE OBJECT )


    const climateBehaviours = [
        { description: "Recycle", greenPoints: 30 },
        { description: "Cycle everywhere", greenPoints: 40 },
        { description: "Commute to work via plane", greenPoints: -70 },
        { description: "Replace beef with veg", greenPoints: 50 },
        { description: "Build a rocket", greenPoints: -500 },
    ];




    let groupBehaviour = climateBehaviours.reduce((acc, behaviour) => {

        if (behaviour.greenPoints >= 0) acc.goodClimateBehaviours.push(behaviour)
        else acc.badClimateBehaviours.push(behaviour)

        return acc
    }, {
        goodClimateBehaviours: [],
        badClimateBehaviours: [],
    })








    ///////////////////////////// --- @s Reduce ---  Add up prices In Cart --- Array Of Objects --- ( RETURNS SINGLE OBJECT )

    let cart = [

        {
            title: 'Samsung Galaxy S7',
            price: 599.99,
            amount: 1,
        },
        {
            title: 'Google Pixel',
            price: 499.99,
            amount: 2,
        },
        {
            title: 'Xiaomi Redmi Note 2',
            price: 699.99,
            amount: 4,
        },
        {
            title: 'Xiaomi Redmi Note 5',
            price: 799.99,
            amount: 3,
        },
    ]


    // FIRST VERSION

    let total = cart.reduce((acc, { amount, price }) => {

        acc.totalItems += amount
        acc.cartTotal += amount * price
        // console.log(acc);
        return acc
    },
        {
            totalItems: 0,
            cartTotal: 0
        }
    )





    // console.log(total);


    // SECOND VERSION

    let total2 = cart.reduce(({ totalItems, cartTotal }, { amount, price }) => {
        return {
            totalItems: totalItems + amount,
            cartTotal: cartTotal + amount * price
        };
    }, { totalItems: 0, cartTotal: 0 });


    // console.log(total2);











    ///////////////////////////// --- @s Reduce --- Counts Repetitions in Reduce FETCH Total of Languages Repos  from ---  Array Of Objects --- ( RETURNS SINGLE OBJECT )



    let fetchRepos = async () => {

        const response = await fetch('https://api.github.com/users/john-smilga/repos?per_page=100')
        const data = await response.json()


        const newData = data.reduce((acc, { language }) => {

            // If Statement Eliminate False Values
            // if (language) acc[language] = (acc[language] || 0) + 1
            if (language) acc[language] = acc[language] + 1 || 1

            return acc
        }, {})

        console.log(data);
    }


    // fetchRepos()



    let getdata = async () => {


        const response = await fetch("https://www.signazon.com/designerservice/service.asmx/GetModels?ID=7&Year=2018&fbclid=IwAR0OuzaqUNS6k7SOUjhPt0sQR_QNLl0XdoSqPZAYl84FBcppyi1dIFosKqk", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "es,en-US;q=0.9,en;q=0.8,pt;q=0.7,lv;q=0.6",
                "content-type": "application/json; charset=utf-8",
                "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Microsoft Edge\";v=\"109\", \"Chromium\";v=\"109\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "_gcl_au=1.1.113411739.1675226096; iCart2=13526159; _gid=GA1.2.25763108.1675226097; iLead2=Dze9tqsbsYJcGZ3lOCNnd5lTctbaxbBlRrdvlYKcGiE=; LCDATA=greet=0&greeting=; _ga_34B604LFFQ=GS1.1.1675226097.1.0.1675226097.60.0.0; chatactive=2active; G_ENABLED_IDPS=google; _ga=GA1.2.1394260790.1675226097; _gat_UA-4451610-1=1",
                "Referer": "https://www.signazon.com/car-window-decals/?fbclid=IwAR1Wm3iSHMAlCsMk9bhm4wZmQxMWc5IPt1AXYV1JfDc4veUO85N3z7svLpo",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
        });

        const data = await response.json()

        console.log(data);

    }



    // getdata()




    ///////////////////////////// --- @s Reduce --- dont Know but is cool for Nested Object

    const items = {
        "violations": [
            {
                "impact": "serious",
                "nodes": [
                    {
                        "any": [
                            {
                                "impact": "critical"
                            },
                            {
                                "impact": "serious"
                            }
                        ],
                        "all": [
                            {
                                "impact": "moderate"
                            }
                        ],
                        "none": [
                            {
                                "impact": "minor"
                            }
                        ]
                    }
                ]
            },
            {
                "impact": "serious",
                "nodes": [
                    {
                        "any": [
                            {
                                "impact": "serious"
                            },
                            {
                                "impact": "minor"
                            }
                        ],
                        "all": [
                            {
                                "impact": "moderate"
                            }
                        ],
                        "none": [
                            {
                                "impact": "serious"
                            }
                        ]
                    }
                ]
            },
            {
                "impact": "serious",
                "nodes": [
                    {
                        "any": [
                            {
                                "impact": "critical"
                            },
                            {
                                "impact": "critical"
                            }
                        ],
                        "all": [
                            {
                                "impact": "moderate"
                            }
                        ],
                        "none": [
                            {
                                "impact": "moderate"
                            }
                        ]
                    },
                    {
                        "any": [
                            {
                                "impact": "critical"
                            },
                            {
                                "impact": "critical"
                            }
                        ],
                        "all": [
                            {
                                "impact": "moderate"
                            }
                        ],
                        "none": [
                            {
                                "impact": "moderate"
                            }
                        ]
                    }
                ]
            }
        ]
    }


    // First Version

    const newItems = items.violations.reduce((acc, { impact, nodes }) => {

        acc.push({ impact });
        nodes.forEach(item => {
            Object.keys(item).forEach(key => {
                acc.push(...item[key]);
            })
        })
        return acc
    }, []);

    // console.log(newItems);


    // Second Version

    const newItems2 = items.violations.flatMap(({ impact, nodes }) => [
        { impact },
        ...nodes.flatMap(({ any, all, none }) => [...any, ...all, ...none])
    ]);

    // console.log(newItems2);



}