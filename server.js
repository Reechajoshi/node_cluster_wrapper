const clusterHelper = require("./helper/clusterHelper");
const config = require("./config");

/**
 * creates 3 worker process from main process
 * sends message to specific worker based on ID
**/

if(clusterHelper.isMaster()) {
	for ( var i = 0; i < 3; i++) 
		clusterHelper.createCluster("worker.js", config.getAllConfig());
	clusterHelper.sendMessage(1, "Message sent to worker 1");
	clusterHelper.sendMessage(2, "Message sent to worker 2");
}