A:  Docker is a platform that helps developers build, ship, and run applications in isolated environments called containers. 
   It ensures that applications run consistently across different environments without compatibility issues.


B: 🏗️ How Does Docker Work?
    Dockerfile: Defines instructions to build an image.
        Image: A template with the app and dependencies.
        Container: A running instance of an image.
        Docker Hub: A public registry to share and pull images.
 
C: Example Workflow:

     Write a Dockerfile.
     Build an image.
     Run a container.
     Deploy the container on any environment—local, server, or cloud.
 
1: Docker Image = Blueprint/Template 📑

    It contains the application code, libraries, dependencies, environment variables, and configuration files.
    It’s read-only and immutable.
     
2: Docker Container = Running Instance 🚀

It’s a live, executable environment created from an image.
Containers are isolated but can interact with other containers if needed.

3: Kubernetes (K8s) is a powerful container orchestration platform that automates the deployment, 
  scaling, and management of containerized applications


 
----------------------cmd-------------
Build: docker build -t react-app:dev . 
 run: docker run -d -p 5173:5173 react-app:dev

 show all images:  docker ps -a   

  logs: docker logs <container_id>

