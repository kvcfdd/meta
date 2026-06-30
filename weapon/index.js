import { Data, Meta } from "#miao"
import lodash from "lodash"
import { abbr, alias } from "./alias.js"

// ZZZ weapons are organized by type, each type dir has its own data.json
const types = ["击破", "命破", "异常", "强攻", "支援", "防护"]
let data = {}
for (let type of types) {
  let typeData = Data.readJSON(`resources/meta-zzz/weapon/${type}/data.json`, "miao")
  if (typeData) {
    lodash.forEach(typeData, (ds, id) => {
      ds.type = type
      data[id] = ds
    })
  }
}

const meta = Meta.create("zzz", "weapon")
meta.addData(data)
meta.addAlias(alias)
meta.addAbbr(abbr)
