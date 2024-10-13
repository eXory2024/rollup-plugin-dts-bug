import {dts} from "rollup-plugin-dts"

export default {
	input: "./src/test.d.mts",

	output: {
		file: "./dist/module.d.mts"
	},

	plugins: [
		dts()
	]
}
