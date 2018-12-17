# nodejs-cluster-wrapper #

* Description:
Cluster wrapper is a class which provides methods to 
1) Create a new Cluster
2) Send messages to specific worker
3) Attach a messageHandler on receiving message

* Steps: 
1) Checks if process is a Master thread
    ```
    if(clusterHelper.isMaster())
    ```
2) Creates 3 worker threads
    ```
    for ( var i = 0; i < 3; i++) 
		clusterHelper.createCluster("worker.js", config.getAllConfig());
    ```
3) Sends "Message sent to worker 1" to 2nd Worker thread
    ```
    clusterHelper.sendMessage(1, "Message sent to worker 1");
    ```
4) Sends "Message sent to worker 2" to 3rd Worker thread
    ```
    clusterHelper.sendMessage(2, "Message sent to worker 2");
    ```
5) Handler for Worker2/3 set the message in config variable
    ```
    function handleWorkerMessage(processId, message) {
        config.setConfigByKey("workerMessage", message);
        console.log(config.getAllConfig());
    }
    ```