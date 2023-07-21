
import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";

export default () => {



    /* 
        IMPORTANT !!! 
    --- Eliminate False, Strigns, {}, [] & 0's To Calculate Values 
        .filter(Number) --  to get only Numbers from Array 
        !isNaN(Key) ?   --  to get Only Numbers from Array Of Objects
        .filter(item => !isNaN(item.key))  --  to get Only Numbers fro Array Of Objects
       
    */



    ///////////////////////////// --- @s Reduce --- Find Average in --- Array --- ( RETURNS VALUE / NUMBER )




    ///////////   I -  ELIMINATE FALSE VALUES, STRING AND 0's FOR ACCURATE RESULT WITH FILTER(Number)



    let average = array.filter(Number).reduce((acc, number, index, array) => {

        if (number) acc += number
        return index === (array.length - 1) ? acc / array.length : acc
        // if (index === array.length - 1) { return acc / array.length; } else { return acc; }
    }, 0);



    // console.log(average);





    ///////////   II -  SHORT VERSION

    let averageShort = array.filter(Number).reduce((acc, number) => {

        if (number) acc += number
        return acc

    }, 0) / array.filter(Number).length

    // console.log(averageShort);






    ///////////   III -  SHORTEST VERSION

    let averageShortest = array.reduce((acc, number) => !isNaN(number) ? acc += number : acc, 0) / array.filter(Number).length


    // console.log(averageShortest);



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





    ///////////////////////////// --- @s Reduce --- Find Average in --- Array Of Objects --- ( RETURNS VALUE / NUMBER )



    ///////////   I -   ELIMINATE FALSE VALUES, STRING AND 0's FOR ACCURATE RESULT WITH FILTER(Number)


    // let averageYears = pilots.reduce((acc, { years }, index, array) => {

    //     if (!isNaN(years)) acc += years;
    //     return index === (array.length - 1) ? acc / array.filter(item => !isNaN(item.years)).length : acc
    //     // if (index === array.length - 1) { return acc / array.length; } else { return acc; }

    // }, 0)


    // // console.log(averageYears);

    let averageYears = pilots
        .filter(pilot => !isNaN(pilot.years))
        .reduce((acc, { years }, index, array) => {

            acc += years;
            return index === (array.length - 1) ? acc / array.length : acc


        }, 0)

    // console.log(averageYears);








    ///////////   II -  SHORT VERSION


    let averageYearsShort = pilots.reduce((acc, { years }) => {

        if (!isNaN(years)) acc += years;
        return acc

    }, 0) / pilots.filter(item => !isNaN(item.years)).length

    // console.log(averageYearsShort);





    ///////////   III -  SHORTEST VERSION


    let averageYearsShortest = pilots.reduce((acc, { years }) => !isNaN(years) ? acc += years : acc, 0) / pilots.filter(item => !isNaN(item.years)).length

    // console.log(averageYearsShortest);




}