import { Data, Meta } from "#miao"

let data = Data.readJSON("resources/meta-zzz/material/data.json", "miao")
let meta = Meta.create("zzz", "material")
meta.addData(data)
