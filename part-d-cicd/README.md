# Part D - CI/CD 

## About the question: 

        Create a basic GitHub Actions workflow.
            • Trigger when code is pushed to main
            • Install dependencies
            • Run a basic test
            • Build the Docker image
            • Report whether the build was successful

    13. What does CI mean?

    14. What does CD mean?

    15. Why should automated testing happen before deployment?

    16. What happens when the pipeline fails?

    17. How should secrets be handled?

        Bonus: Explain how you would extend the pipeline to Build → Test → Docker Image → Deploy to Staging → Manual Approval → Production.

## Answers

    About the pipeline, I would extend the CI pipeline into a CI/CD pipeline with separate stages:

    - Build: I would to checkout the source code, restore dependencies, and build the .NET application
    - Test: Run unit tests and integration tests. The pipeline should stop if any test is failed
    - Docker Image: Build a Docker Image and tag it with the Git commit SHA or release version. The Image should then be pushed to a container registry.
    - Deploy to Staging - Deploy the exact Docker Image to the staging environment. After deployment, run health checks or smoke tests to verify that the application is working correctly.
    - Manual Approval - Require an authorized team member to review the staging result and approve the production deployment
    - Deploy to Production - Deploy the same tested Docker Image to production. I would avoid rebuilding the Image to ensure that the artifact tested in staging is exactly the artifact deployed to production

### 13. What is CI mean?
CI (Continuous Integration) is an automated process that runs when developers push or integrate code into a shared repository.

The CI pipeline automatically sets up the appropriate environment for the codebase, restores and installs the required dependencies, builds the application, and runs automated tests to verify that the changes do not introduce problems.

If all checks pass, the code can proceed to the next stage, such as Continuous Delivery or Continuous Deployment (CD).

## 14. What is CD mean?

CD (Continuous Delivery or Continuous Deployment) can have two meanings:

Continuous Delivery: This is the process of automatically building, testing, and preparing application artifacts, such as Docker images, so they are ready to be deployed to an environment. Deployment to production may require a manual approval step before it can proceed.

Continuous Deployment: Unlike Continuous Delivery, Continuous Deployment automatically deploys the application to the configured environment without requiring manual approval, as long as all required checks and tests pass.

Both approaches automate the build and testing processes, which reduces manual work, deployment time, and the risk of human error.

## 15. Why should automated testing happen before deployment?

Automated testing before deployment helps reduce the risk of bugs reaching the production environment and negatively affecting the user experience.

It also provides an important quality gate in the CI/CD pipeline by verifying that the application works as expected before it proceeds to further integration, acceptance testing, or deployment stages.

This helps detect problems early, reduces the cost of fixing bugs, and increases confidence in the deployment.

## 16. What happens when the pipeline fails?\

When a step in the CI/CD pipeline fails, the pipeline will normally stop at that step, and the following dependent steps will not be executed.

The CI/CD system will record the error and provide logs so that developers can inspect, diagnose, and fix the problem. After fixing the issue, the developer can push the changes again and trigger the pipeline again.

## 17. How should secrets be handled?

Sensitive information in CI/CD should be securely managed using Secrets and Variables provided by the repository or a dedicated secret management system.

This helps protect sensitive information during the build and deployment process and prevents important credentials such as API keys, database connection strings, passwords, and deployment credentials from being exposed in the source code or workflow files.

Access to these secrets should also be restricted to authorized users, workflows, and environments.