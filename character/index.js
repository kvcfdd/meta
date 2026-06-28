import { Data, Meta } from "#miao"
import { alias, abbr } from "./alias.js"
import lodash from "lodash"

let data = Data.readJSON("resources/meta-mc/character/data.json", "miao")
let meta = Meta.create("mc", "char")
meta.addData(data)
meta.addAlias(alias)
lodash.forEach(data, (ds) => {
  abbr[ds.name] = abbr[ds.name] || ds.name
})
meta.addAbbr(abbr)
