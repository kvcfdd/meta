import { Data, Meta } from "#miao"
import lodash from "lodash"
import { abbr, alias } from "./alias.js"

// MC weapons are organized by type, each type dir has its own data.json
const types = ["broadblade", "gauntlets", "pistols", "rectifier", "sword"]
let data = {}
for (let type of types) {
  let typeData = Data.readJSON(`resources/meta-mc/weapon/${type}/data.json`, "miao")
  if (typeData) {
    lodash.forEach(typeData, (ds, id) => {
      ds.type = type
      data[id] = ds
    })
  }
}

const meta = Meta.create("mc", "weapon")
meta.addData(data)
meta.addAlias(alias)
meta.addAbbr(abbr)
