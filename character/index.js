import { Data, Meta } from "#miao"
import { alias } from "./alias.js"
import lodash from "lodash"

let data = Data.readJSON("resources/meta-mc/character/data.json", "miao")
let meta = Meta.create("mc", "char")
meta.addData(data)
meta.addAlias(alias)
