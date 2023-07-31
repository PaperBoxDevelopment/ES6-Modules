

import { listOfEmployees, data, array, arrayOfNumbers, object, user, arrayOfObjects, pilots, parragraph } from "../data.js";
import { ObjectId } from "mongodb";



export default async () => {

    const moviesCollection = dbs.collection("movies")
    const employees = dbs.collection("employees")


    ///////////////////////////   @s Compare  MongoDB ObjectsId with the .equals() Method

    const objectId1 = new ObjectId("6469687cadf19edf56a73af5");
    const objectId2 = new ObjectId("6469687cadf19edf56a73af5");

    // console.log(objectId1 == objectId2); // false
    // console.log(objectId1.equals(objectId2)); // true
    //example on how to use it
    // const listOfInvoices = invoices.filter(invoice => invoice.customerId.equals(customer._id))





    // MongoDB Notes for proffesionals page 25


    // @s Create New Collection

    let createCollection = async (name) => await dbs.createCollection(name)
    // createCollection("employees") 


    // @s List All Colletions

    let listCollections = async () => await dbs.listCollections().toArray()
    // console.log(await listCollections());


    // @s Drop Collection

    const dropCollection = async (collection) => await collection.drop()




    //////////////////////////////////////////////////////////////////


    // @s findOne Document

    let movie = async () => await moviesCollection.findOne({})
    // console.log(await movie());


    let insertOne = async (colletion, document) => await colletion.insertOne(document)
    // 


    // @s insertMany Documents in colletion


    let insertMany = async (collection, arrayOfObjects) => await collection.insertMany(arrayOfObjects)
    // await insertMany(employees, listOfEmployees)



    //////////////////////////////////////////////////////////////////  AGGREGATION  //////////////////////////////////////////////////////////////////


    // @s $match

    let match = async () => await employees.aggregate([{ $match: { "dept": "Admin" } }]).toArray()
    
    
    
    let matchAll = async () => await moviesCollection.aggregate([]).toArray()
    // console.log(await matchAll());







    // @s $project 

    let project = async () => await employees.aggregate([{ $project: { "_id": 0, "name": 1 } }]).toArray()
    // console.log( await project());



    // @s $gorup

    let groupBasic = async () => await employees.aggregate([{ $group: { '_id': '$dept' } }]).toArray()
    // console.log( await groupBasic())

    let groupAndSum = async () => await employees.aggregate([{ $group: { '_id': null, 'totalAge': { $sum: "$age" } } }]).toArray()
    // console.log( await groupAndSum());



    // @s $sum

    let sum = async () => await employees.aggregate([{ $group: { '_id': '$dept', "noOfDept": { $sum: 1 } } }]).toArray()
    // console.log( await sum())



    // @s $average 

    let average = async () => await employees.aggregate([{ $group: { '_id': '$dept', "noOfEmpoyee": { $sum: 1 }, "avgExp": { $avg: "$totalExp" } } }]).toArray()
    // console.log( await average())



    // @s $minimum

    let minimum = async () => await employees.aggregate([{ $group: { '_id': '$dept', "noOfEmpoyee": { $sum: 1 }, "minExp": { $min: "$totalExp" } } }]).toArray()
    // console.log( await minimum())



    // @s Maximun

    let maximun = async () => await employees.aggregate([{ $group: { '_id': '$dept', "noOfEmpoyee": { $sum: 1 }, "maxExp": { $max: "$totalExp" } } }]).toArray()
    // console.log( await maximun())



    // @s Getting Specific field's value from first and last document of each group

    let SpecificValueFromFirstAndLastDocument = async () => await employees.aggregate([{ $group: { '_id': '$age', "lasts": { $last: "$name" }, 'firsts': { $first: "$name" } } }]).toArray()
    // console.log( await SpecificValueFromFirstAndLastDocument())



    // @s Minimum with Maximun

    let minAndMax = async () => await employees.aggregate([{ $group: { '_id': '$dept', "noOfEmployee": { $sum: 1 }, "maxExp": { $max: "$totalExp" }, "minExp": { $min: "$totalExp" } } }]).toArray()
    // console.log( await minAndMax())



    // @s Fush An addToSet // Push adds a ﬁeld's value form each document in group to an array used to project data in array format, addToSet is simlar to push but it omits duplicate values.

    let pushAndAddToSet = async () => await employees.aggregate([{ $group: { '_id': 'dept', "arrPush": { $push: "$age" }, "arrSet": { $addToSet: "$age" } } }]).toArray()
    // console.log( await pushAndAddToSet())



    // @s $unwind  Used to create multiple in-memory documents for each value in the speciﬁed array type ﬁeld, then we can do further aggregation based on those values. 

    let unwind = async () => await employees.aggregate([{ $match: { 'name': 'Adma' } }, { $unwind: "$languages" }]).toArray()
    // console.log( await unwind())



    // @s $sort

    let ascending = async () => await employees.aggregate([{ $match: { 'dept': 'Admin' } }, { $project: { "name": 1, "dept": 1 } }, { $sort: { "name": 1 } }]).toArray()
    // console.log( await ascending())



    let descending = async () => await employees.aggregate([{ $match: { 'dept': 'Admin' } }, { $project: { "name": 1, 'dept': 1 } }, { $sort: { "name": -1 } }]).toArray()
    // console.log( await descending())



    // @s skip

    let skip = async () => await employees.aggregate([{ $match: { 'dept': 'Admin' } }, { $project: { "name": 1, "dept": 1 } }, { $sort: { 'name': 1 } }, { $skip: 1 }]).toArray()
    // console.log(await skip())



    // @s $limit

    let limit = async () => await employees.aggregate([{ $match: { 'dept': 'Admin' } }, { $project: { 'name': 1, } }]).toArray()
    // console.log(await limit())



    // @s Comparasion $project

    let comparasionProject = async () => await employees.aggregate([{ $match: { 'dept': 'Admin' } }, { $project: { 'name': 1, 'dept': 1, age: { $gt: ["$age", 30] } } }]).toArray()
    // console.log(await comparasionProject())



    // @s Comparasion $match    

    let comparasionMatch = async () => await employees.aggregate([{ $match: { 'dept': 'Admin', age: { $gt: 30 } } }, { $project: { 'name': 1, "dept": 1 } }]).toArray()
    // console.log(await comparasionMatch())



    // @s Boolean Aggregation in projection

    let booleanProject = async () => await employees.aggregate([{ $match: { 'dept': 'Admin' } }, { $project: { 'name': 1, "dept": 1, "age": { $and: [{ $gt: ["$age", 30] }, { $lt: ["$age", 36] }] } } }]).toArray()
    // console.log(await booleanProject())



    // @s Boolean Aggregation in match

    let booleanMatch = async () => await employees.aggregate([
        {
            $match:
            {
                'dept': 'Admin',
                $and:
                    [
                        { age: { $gt: 30 } },
                        { age: { $lt: 36 } }
                    ]
            },

        },

        {
            $project:
            {
                'name': 1,
                'dept': 1,
                age:
                {
                    $and:
                        [

                            { $gt: ["$age", 30] },
                            { $lt: ["$age", 36] }
                        ]
                }
            }
        }
    ]).toArray()
    // console.log(await booleanMatch())



}