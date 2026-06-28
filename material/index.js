import lodash from "lodash"
import { Data, Meta } from "#miao"

let data = Data.readJSON("resources/meta-mc/material/data.json", "miao")

let ret = {}
let abbr2 = {}

// MC material data.json is flat: { "材料名": { id, type, name, star }, ... }
lodash.forEach(data, (item) => {
  let { id, type, name, star } = item
  let tmp = {
    poseType: type,
    type,
    id,
    name,
    star
  }
  ret[item.name] = tmp
})

let meta = Meta.create("mc", "material")
meta.addData(ret)
meta.addAbbr(abbr2)
