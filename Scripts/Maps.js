
import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";

export default () => {



    ///////////////////////////   @s Map


    ///////////////////////////--- @s Map --- returns a new Array with any modification that you want



    let basicMap = array => array.map((value, index, arr) => index)







    ///////////////////////////   @s Map ---  Convert Array to Array of Objects with default Key

    let arrayToArrayOfObjects = array => array.map(id => ({ id }));                // Here you Make the Argument the Default Key
    let arrayToArrayOfObjects2 = array => array.map(element => ({ key: element }));
    let arrayToArrayOfObjects3 = (array, key) => array.map(element => ({ [key]: element })) // Here you Create the Default ID and Use the Argument as .Values









    ///////////////////////////   @s Map --- Adds Empty Array or Object or Calculation  to Each Object in Array of Objects


    let addEmptyArrayToEachObjectInArrayOfObjects = (arrayOfObjects, key) => arrayOfObjects.map(v => ({ ...v, [key]: [] }))
    // console.log(addEmptyArrayToEachObjectInArrayOfObjects(arrayOfObjects, 'EmptyArray'));










    ///////////////////////////   @s Map --- Loop through Array Of Objects and update one specific value in all objects.


    const items = [
        { id: '🍔', name: 'Super Burger', price: 3.99 },
        { id: '🍟', name: 'Jumbo Fries', price: 1.99 },
        { id: '🥤', name: 'Big Slurp', price: 2.99 },
        { id: '🥧', name: 'Apple Pie', price: "undefined" },
    ];


    let halfPriceItem = (arrayOfObjects, key, value) =>

        arrayOfObjects
            .filter(item => !isNaN(item.price))
            .map(item => {
                if (item[key] === value) ({ ...item, price: item.price / 2 })
                return item;
            })

    // console.log(halfPriceItem(items, 'id', '🍟'));









    /////////////////////////// @s Map --- Modify Array Of Objects and Add Conditional Properties

    let expertPilots = pilots.filter(item => !isNaN(item.years)).map(pilot => ({ ...pilot, level: pilot.years > 20 ? 'pro' : 'rookie' }))










    /////////////////////////// @s Map --- Flat a multidimentional Array with .flat(Infinity)

    const objArr = [
        {
            id: 1,
            centroActividad: [
                [
                    { title: 501 },
                    { title: 502 },
                ],

                [
                    { title: 503 },
                    { title: 504 },


                ],
            ]
        }
    ]


    let findCentro = objArr.map(centro => centro.centroActividad);
    let flater = findCentro.flat(Infinity)
    let filtered = flater.filter(item => item.title === 504)
    // console.log(objArr[0].id);
    // console.log(flater);
    // console.log(filtered);










    ///////////////////////////  @s Map --- Get Values By Key --- Array Of Objects ---

    const customers = [
        { id: 156744, name: 'leo' },
        { id: 2445532, name: 'nat' },
        { id: 26478, name: 'ceci' }
    ];
    let getValuesByKey = (arrayOfObjects, key) => arrayOfObjects.map(item => ({ name: item[key] }))

    // console.log(getValuesByKey(customers, 'name'));











    /////////////////////////// @s Map --- Filter & Reduce

    const students = [
        { name: "Nick", grade: 10 },
        { name: "John", grade: 15 },
        { name: "Julia", grade: 19 },
        { name: "Nathalie", grade: 9 },
        { name: "Herman", grade: 20 },
        { name: "Elis", grade: 5 },
        { name: "Matt", grade: 21 },
    ];

    const aboveTenSum = students

        .map(student => student.grade) // we map the students array to an array of their grades
        .filter(grade => grade >= 10) // we filter the grades array to keep those 10 or above
        .reduce((prev, next) => prev + next, 0); // we sum all the grades 10 or above one by one

    // console.log(aboveTenSum)








    /////////////////////////// @s Map --- Pair 2 Array of objects --- ( RETURNS SINGLE OBJECT )



    const users = [
        { id: 1, email: 'dcontreras@email.tld' },
        { id: 2, email: 'afeher@email.tld' },
        { id: 3, email: 'odj@email.tld' },
    ];

    const profiles = [
        { id: 1, firstName: 'Danielle', lastName: 'Contreras' },
        { id: 2, firstName: 'Alfredas', lastName: 'Fehér' },
        { id: 3, firstName: 'Orpheus', lastName: 'De Jong' },
    ];

    const usersWithProfiles = users.map(user => {
        const profile = profiles.find(profile => user.id === profile.id);
        return { ...user, ...profile };
    });


    // console.log(usersWithProfiles);









    /////////////////////////// @s Map --- Pair Object to Array Of Objects By Id --- ( RETURNS ARRAY OF OBJECTS )

    const centsInString = [
        { id: 1, name: 'CINCUENTA CENTAVOS' },
        { id: 2, name: 'PESETA' },
        { id: 3, name: 'CETENTICINCO CENTAVOS' },
        { id: 4, name: 'UN PESO' },

    ]


    const fractions = {
        2: .5,
        1: .25,
        4: .75,
        3: 1,

    }

    let centsToWords = centsInString.map(item => ({ ...item, Fraccion: fractions[item.id] }))





    // console.log(centsToWords);
}


