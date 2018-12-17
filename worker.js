const clusterHelper = require("./helper/clusterHelper");
const config = require("./config");

if (clusterHelper.isWorker()) {
	clusterHelper.initiateMessageHandler(handleWorkerMessage);
}

/**
 *Message handler that sets the config to specified value on receiving message from Master
 *
 * @param {*} processId
 * @param {*} message
 */
function handleWorkerMessage(processId, message) {
	config.setConfigByKey("workerMessage", message);
	console.log(config.getAllConfig());
}