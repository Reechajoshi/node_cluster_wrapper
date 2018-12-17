const cluster = require('cluster');

/**
 * Cluster helper handling creating a new worker, sending messages
 *
 * @class clusterHelper
 */
class clusterHelper {
	/**
	 *Creates an instance of clusterHelper.
	 * @memberof clusterHelper
	 */
	constructor() { this.workers = []; }

	/**
	 *Creates a new cluster worker and saves reference of worker in worker Array
	 *
	 * @param {*} clusteredFile
	 * @param {*} data
	 * @memberof clusterHelper
	 */
	createCluster(clusteredFile, data) {
		cluster.setupMaster({
			exec: clusteredFile
		});
		this.workers.push(cluster.fork());
	}

	/**
	 *Checks if process is Master
	 *
	 * @returns
	 * @memberof clusterHelper
	 */
	isMaster() {
		return cluster.isMaster;
	}

	/**
	 *Checks if process is Worker
	 *
	 * @returns
	 * @memberof clusterHelper
	 */
	isWorker() {
		return cluster.isWorker;
	}


	/**
	 *Sends a message to particular worker by ID
	 *
	 * @param {*} workerId
	 * @param {*} message
	 * @memberof clusterHelper
	 */
	sendMessage(workerId, message) {
		this.workers[workerId].send(message);
	}


	/**
	 *Setup a handler for worker to receive messages sent by master
	 *Calls a handler Function on receiving message
	 * 
	 * @param {*} messageHandler
	 * @memberof clusterHelper
	 */
	initiateMessageHandler(messageHandler) {
		process.on('message', function (msg) {
			console.log('Worker ' + process.pid + ' received message from master.', msg);
			messageHandler(process.pid, msg);
		});
	}
}

module.exports = new clusterHelper();