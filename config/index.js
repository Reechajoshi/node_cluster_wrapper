/**
 * global config variable to store configuration settings
 *
 * @class config
 */
class config {
	
	/**
	 *Creates an instance of config.
	 * @memberof config
	 */
	constructor() {
		this.config = {
			val1: "abc"
		}
	}


	/**
	 *Sets the config variable by key
	 *
	 * @param {*} value
	 * @param {*} param
	 * @memberof config
	 */
	setConfigByKey(param, value) {
		this.config[param] = value;
	}

	/**
	 *replace the config variable with specified object
	 *
	 * @param {*} configObj
	 * @memberof config
	 */
	setConfig(configObj) {
		this.config = configObj;
	}

	/**
	 *returns the config variable by key
	 *
	 * @param {*} param
	 * @returns String
	 * @memberof config
	 */
	getConfig(param) {
		return this.config[param];
	}

	/**
	 *returns all config
	 *
	 * @returns Array
	 * @memberof config
	 */
	getAllConfig() {
		return this.config;
	}
}

module.exports = new config();