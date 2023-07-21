import { MongoClient } from 'mongodb'

const Parser = { useNewUrlParser: true, useUnifiedTopology: true }
const connect = (url, parser) => MongoClient.connect(url, parser).then(client => client.db())

export default async () => await connect(process.env.ATLAS, Parser)