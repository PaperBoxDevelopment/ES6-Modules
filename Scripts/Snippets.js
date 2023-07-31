
import { data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";


export default () => {





    ///////////////////////////////////// @s ...REST & SPREAD



    let spread = array;



    ///////////////////////////  @s Destructuring With Rest

    const { id, country, city, ...userNoAddress } = user;


    // console.log(userNoAddress);






    ///////////////////////////  @s Rest & Spread at the Same Time

    const restAndspread = (...rest /*console.log(rest)  */) => restAndspread(...spread, 1, 2, 4, 5, "5", "8");






    ///////////////////////////   @s Return Array from Function

    let calculate = (a, b) => {
        const add = a + b
        const substract = a - b
        const multiply = a * b
        const divide = a / b

        return [add, substract, multiply, divide]
    }

    const [add, substract, multiply, divide] = calculate(4, 7)





    ///////////////////////////   @s Boolean Casting

    // Old
    const age = Boolean(object.JobType)

    // New

    const ageNew = !!object.JobType


    ///////////////////////////   @s Nullish Coalescing


    // Old

    let addId = (user, id) => { user.id = id !== null && id !== undefined ? id : "Unknown" }

    // New

    let addIdNew = (user, id) => { user.id = id ?? "Unknown"; return user }



    ///////////////////////////   @s Default Parameters

    // Old

    let createUser = (name, email) => {

        let user = {
            email,
            name: name ?? "Unknownf"
        }

    }

    // New

    let createUserNew = (name = 'Unknown', email) => {

        let user = { email, name }

    }

    ///////////////////////////   @s Optional Chaining


    // Old

    let hasValidPostcode = u =>
        u &&
        u.address &&
        u.address.postcode &&
        u.address.postcode.valid

    // New

    let hasValidPostcodeNew = u => u?.address?.postcode?.valid




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