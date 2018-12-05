const clusterHelper = require("./helper/clusterHelper");

if(clusterHelper.isMaster()) {
	console.log("SERVER.jS: master");
	clusterHelper.createCluster("demo.js");
} else {
	console.log("SERVER.js: worker");
}