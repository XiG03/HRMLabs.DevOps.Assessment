# Part F - Troubleshooting Scenario
## About the question: 

          Assume the application is running on localhost:3000.
        Create an Nginx configuration that allows users to access the application through:
        https://hrmlabs.example.com
    18. Explain the purpose of server.
    19. Explain the purpose of location.
    20. Explain the purpose of proxy_pass.
    21. How would you configure HTTPS?
    22. How would you configure an HTTP → HTTPS redirect?
    23. What basic security headers would you consider?  

## Answer

### 18. Explain the purpose of server.

The server block is a configuration block in Nginx that defines which requests Nginx should handle and how those requests should be processed. It can specify the listening port, domain name, SSL configuration, and request handling rules.

### 19. Explain the purpose of location.

The location block defines how Nginx should handle requests that match a specific URL path.

### 20. Explain the purpose of proxy_pass.

proxy_pass specifies the destination where Nginx forwards the matched request. It is commonly used to forward requests from a location block to a backend application.

