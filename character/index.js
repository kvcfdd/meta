import { Data, Meta } from "#miao"
import { alias } from "./alias.js"

let data = Data.readJSON("resources/meta-zzz/character/data.json", "miao")
let meta = Meta.create("zzz", "char")
meta.addData(data)
meta.addAlias(alias)
