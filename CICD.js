| Term                                    | Meaning                                                                                            |
| --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **CI (Continuous Integration)**         | Automatically build and test code when changes are pushed (e.g., on every pull request or commit). |
| **CD (Continuous Delivery/Deployment)** | Automatically deliver or deploy tested code to staging or production environments.                 |



basic flow of CICD
1. Developer pushes code → 
2. Pipeline triggers (e.g., GitHub Actions, Jenkins, GitLab CI) →
3. Code is built →
4. Tests are run →
5. Code is linted/formatted →
6. If all passes, deployed to staging/production
