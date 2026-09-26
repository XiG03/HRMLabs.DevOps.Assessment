# Part B - Git 

## About the question: 

    HRM Labs has branches main, develop, and feature/login. A developer has completed a new login feature. Explain the steps you recommend to move the feature into the development environment.

    7. What is the difference between git merge and git rebase?

    8. What is a Pull Request?

    9. Why should we avoid directly pushing to main?

    10. What would you do if a merge conflict occurs?

    11. What is the purpose of .gitignore?

    12. Should passwords, API keys, or database credentials be stored in Git? Why?

## Answer

Since the developer has completed the login feature on the feature/login branch, I would follow these steps: 

      1. Check the changes and make sure sensitive files such as .env, appsettings.json (.NET) and credentials are not included.
      2. Stage and commit the changes (should commit with the message follow git commit convention)
      3. Push the feature branch to the remote repository (on feature/login)
      4. Create a Pull Request from feature/login to develop
      5. The Team Lead reviews the code, and the required CI checks such as build and automated tests should pass.
      6. After approval, merge feature/login into develop
      7. The CI/CD pipeline deploys the develop branch to the development environment
      8. QA/Testers test the login feature in the development environment


### 7. What is the difference between git merge and git rebase?

Git merge combines the changes and histories of two branches. It preserves the existing commit history and usually creates a new merge commit.

Git rebase, on the other hand, moves or reapplies the commits from one branch on top of another branch. It creates new commits and rewrites the commit history, resulting in a more linear history.

Because rebase rewrites commit history, it should be used carefully on shared branches.

### 8. What is a Pull Request?

A Pull Request (PR) is a request to merge changes from one branch into another branch, usually requiring review and approval from authorized team members.

During the Pull Request process, the changes can be reviewed, automated checks can be run, and potential merge conflicts can be identified before the changes are merged.

Reviewers or assignees can check the code, verify that the implementation meets the requirements, and provide feedback. If changes are required, the developer updates the branch and the Pull Request is reviewed again. This process continues until the changes meet the required standards and the Pull Request is approved and merged.

## 9. Why should we avoid directly pushing to main?

In many projects, the main branch represents the production or stable version of the application. Therefore, changes pushed directly to main can have a significant impact on the team and end users.

If developers can push code directly to main without proper review, testing, or other protection rules, untested code or code with conflicts may be deployed to the production environment. This can introduce bugs, cause service disruptions, and potentially result in significant losses for the team and customers.

Therefore, changes should normally go through a Pull Request, code review, automated testing, and the required approval process before being merged into main.

### 10. What would you do if a merge conflict occurs?

There can be several situations where a merge conflict occurs.

If a merge conflict occurs while I am merging my changes into another branch locally, I would first check which files have conflicts. Then, I would review the conflicting changes and resolve them appropriately. After resolving the conflicts, I would check the Git status, run the necessary tests to make sure the changes work correctly, and then complete the merge and push the changes to the remote repository.

If a merge conflict is detected during a Pull Request, I would check which files are causing the conflict, resolve the conflicts locally, test the changes, commit the resolution, and push the changes to the branch associated with the Pull Request. The Pull Request would then be updated automatically and could be reviewed again.

### 11. What is the purpose of .gitignore?

.gitignore is a file that tells Git which files and directories should not be tracked or committed to the repository.

It is commonly used to exclude generated files, build artifacts, dependencies, and local development files such as node_modules, bin, obj, IDE-specific files, and local configuration files.

It can also be used to prevent sensitive files such as .env files or local configuration files containing secrets from being accidentally committed. However, .gitignore should not be considered a security mechanism. Sensitive credentials should be stored securely using environment variables, GitHub Secrets, or a dedicated secret management system.

### 12. Should passwords, API keys, or database credentials be stored in Git? Why?

No. Passwords, API keys, database credentials, and other sensitive information should not be stored in Git, regardless of whether the repository is hosted internally or on a public or remote platform.

First, environment-specific configuration can be different between developers' local environments, staging, and production. Committing these configuration files can cause unnecessary conflicts and may result in developers accidentally overwriting or committing environment-specific settings.

More importantly, storing credentials in Git creates a significant security risk. If a repository or Git history is compromised, attackers may obtain credentials such as API keys, database passwords, or email service credentials and use them for unauthorized activities.

For example, I have experienced a situation where an application email credential was accidentally exposed. After the credential was discovered, it was misused to send spam emails. This demonstrated to me why sensitive credentials should never be committed to a repository.

Instead, sensitive information should be stored using GitHub Secrets, environment variables, or a dedicated secret management system. If a credential has already been exposed, it should be revoked or rotated immediately, and the sensitive data should also be removed from the repository history when necessary.

