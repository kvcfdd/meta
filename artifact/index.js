import { Data, Meta } from "#miao"
import lodash from "lodash"
import { alias } from "./alias.js"

let data = Data.readJSON("resources/meta-mc/artifact/data.json", "miao")

let setMeta = Meta.create("mc", "artiSet")

lodash.forEach(data, (setData) => {
  let artiSet = {
    name: setData.name,
    effect: setData.skills
  }
  setMeta.addDataItem(artiSet.name, artiSet)
})

setMeta.addAlias(alias)
