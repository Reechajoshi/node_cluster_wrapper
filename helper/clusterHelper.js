const cluster = require('cluster');

class clusterHelper {
	constructor() {}

	createCluster(clusteredFile) {
		cluster.setupMaster({
			exec: clusteredFile
		});

		cluster.fork();
	} 

	isMaster() {
		return cluster.isMaster;
	}
}

module.exports = new clusterHelper();