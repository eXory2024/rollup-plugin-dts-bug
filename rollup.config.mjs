import {dts} from "rollup-plugin-dts"
import virtual from "@rollup/plugin-virtual"

export default {
	input: "my_virtual_entry.d.mts",

	output: {
		file: "./dist/module.d.mts"
	},

	plugins: [
		virtual({
			"my_virtual_entry.d.mts": `export {myFunction} from "./src/myFunction.mts"`
		}),
		dts()
	]
}
