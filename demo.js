const clusterHelper = require("./helper/clusterHelper");
if (clusterHelper.isMaster()) {
	console.log("DEMO.jS: Master");
} else {
	console.log("DEMO.js: worker");
}