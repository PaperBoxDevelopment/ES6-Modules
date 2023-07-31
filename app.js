console.log('App Runing Alive...');
import dotenv from 'dotenv'
import connectDB from "./dbs.js";
import Maps from "./Scripts/Maps.js"
import Loops from "./Scripts/Loops.js"
import Reduce from "./Scripts/Reduce.js"
import Arrays from "./Scripts/Arrays.js";
import Objects from "./Scripts/Objects.js"
import Strings from "./Scripts/Strings.js"
import Snippets from "./Scripts/Snippets.js"
import Algorithims from "./Scripts/Algorithims.js"
// import Aggregation from "./Scripts/Aggregation.js";
import ReduceAverage from "./Scripts/ReduceAverage.js"
import FunctionalProgamming from "./Scripts/Functional.js"



dotenv.config()

// global.dbs = await connectDB()


Maps()
Loops()
Arrays()
Reduce()
Objects()
Strings()
Snippets()
Algorithims()
// Aggregation()
ReduceAverage()
FunctionalProgamming()








