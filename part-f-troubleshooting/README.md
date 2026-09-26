# Part F - Troubleshooting Scenario
## About the question: 

        At 10:00 AM, Customer Support reports: “The HRM system cannot be accessed.”
            Server: Running
            CPU: 35%
            Memory: 55%
            Disk: 65%

            Docker:
            CONTAINER ID STATUS
            abc123 Exited (1)
            docker logs abc123 returns:
            Error: Unable to connect to database
            Connection refused: mysql:3306
    24. What do you think is happening?
    25. What would you check first?
    26. What commands would you use?
    27. How would you determine whether MySQL is running?
    28. How would you check whether the application can reach MySQL?
    29. What would you do before restarting anything?
    30. How would you prevent this problem from happening again?
        Candidates may consider Docker containers, logs, Docker networks, database availability, environment variables, health checks, restart policies, monitoring, and dependency startup order.

## Answer


### 24. What do you think is happening?

With the server still running and CPU, memory, and disk usage within normal ranges, but the application container being in an exited state, I think the application failed because it could not connect to the MySQL database.

There could be several possible causes:

- The MySQL container may be stopped or the database may not be ready yet.
- MySQL may not be listening on port 3306.
- There may be a problem with the application's database connection string or environment variables.
- The backend and MySQL containers may have a Docker network or connectivity problem.

### 25. What would you check first?

In this case, I would first check the application container logs and the last database connection attempt to understand what happened before the application exited. Then, I would check the MySQL container status and logs to determine whether the database was running and ready to accept connections.

### 26. What commands would you use?

I would use docker ps -a to check the status of all containers and docker logs abc123 to review the application logs. I would then check the MySQL container logs, Docker networks, and container configuration to investigate the database connectivity issue. If necessary, I would use docker exec to test connectivity from the application container to mysql:3306.

### 27. How would you determine whether MySQL is running?

I would use docker ps -a to check all Docker containers and identify the MySQL container. Then, I would check the container's health status if a Docker health check is configured, and review its logs to determine whether MySQL is running and ready to accept connections.

### 28. How would you check whether the application can reach MySQL?

I would enter the application container and verify that the mysql hostname can be resolved. Then I would test whether TCP port 3306 is reachable from the application container, for example using nc -zv mysql 3306.

### 29. What would you do before restarting anything?

Before restarting anything, I would first investigate the root cause by checking the application and database logs, container status, network connectivity, and configuration. I would also assess the impact of the restart and make sure that the necessary data and logs have been collected.

If a restart is confirmed to be necessary, I would preferably perform it during a low-traffic period. If high availability is available, I would redirect traffic to a healthy application instance before restarting the affected container, then test the restarted service before directing traffic back to it.

### 30. How would you prevent this problem from happening again?

I would consider a highly available database architecture with a primary database and a replicated standby database. The standby database should continuously replicate data from the primary database, with an appropriate replication strategy to maintain data consistency and minimize data loss.

If the primary database becomes unavailable, the system could fail over to the standby database, allowing the application to continue operating while the primary database issue is being investigated and resolved.

I would also combine this with health checks, monitoring, alerting, connection retry logic, and regular backup and recovery testing.