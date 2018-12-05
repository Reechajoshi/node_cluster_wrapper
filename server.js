const clusterHelper = require("./clusterHelper");

if(clusterHelper.isMaster()) {
	console.log("SERVER.jS: master");
	clusterHelper.createCluster("demo.js");
} else {
	console.log("SERVER.js: worker");
}