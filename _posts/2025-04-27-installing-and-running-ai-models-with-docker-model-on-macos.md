---
title: "Installing and Running AI Models with Docker Model on macOS"
date: 2025-04-27 00:00:00 +0530
categories: 
  - "artificial-intelligence"
  - "docker"
tags: 
  - "ai-model-integration"
  - "ai-models"
  - "cli"
  - "containerization"
  - "docker"
  - "docker-compose"
  - "docker-for-developers"
  - "hello-genai"
  - "interactive-mode"
  - "llama-model"
  - "local-ai-deployment"
  - "machine-learning"
  - "macos"
  - "model-testing"
  - "small-ai-models"
image:
  path: /assets/img/posts/Installing-and-Running-AI-Models-with-Docker-Model-on-macOS.png
---

This article will guide you through setting up and running an AI model locally using Docker on macOS. The model we'll use is called **ai/smollm2**, which is small, easy to use, and perfect for lightweight applications.

#### Requirements

- **macOS**: You should be running macOS on your system.

- **Docker**: Install Docker on your macOS device. You can download it from [here](https://www.docker.com/products/docker-desktop).

- **Some Patience**: Setting up Docker and models may take a few minutes.

#### 1\. Downloading the Model Locally

To get started with the model, we first need to download it. You can do this easily with the following command:

```bashdocker model pull ai/smollm2
```

#### 2\. Why Use `ai/smollm2`?

- **Small and Easy**: The `ai/smollm2` model is small in size and easy to use, making it suitable for developers who want to experiment with AI models without dealing with large files or complicated configurations.

#### 3\. Verifying the Model

After the model has been downloaded, verify its existence and details by running the following command:

```bashdocker model ls
```

You should see something like this:

```
MODEL       PARAMETERS  QUANTIZATION    ARCHITECTURE  MODEL ID      CREATED      SIZE       
ai/smollm2  361.82 M    IQ2_XXS/Q4_K_M  llama         354bf30d0aa3  4 weeks ago  256.35 MiB  
```

This confirms that the model `ai/smollm2` is ready for use.

#### 4\. Testing the Model in the CLI

You can test the model by running it directly from the command line interface (CLI). For example:

```bashdocker model run ai/smollm2 "who is luffy"
```

Output:

```
Luffy is a fictional character in the popular manga series and anime called "One Piece." He is the main protagonist and a member of the Straw Hat Pirates.
```

#### 5\. Testing the Model in Interactive Mode

For a more interactive experience, you can run the model in interactive chat mode:

```bashdocker model run ai/smollm2
```

You will see a prompt where you can type questions, and the model will respond:

```
Interactive chat mode started. Type '/bye' to exit.
> who is zoro in one piece?
In One Piece, Zoro is a powerful swordsman and a member of the Straw Hat Pirates, known for his strength and loyalty to his captain, Monkey D. Luffy.
```

You can also ask general questions like:

```
> what is docker?
Docker is a containerization platform that allows you to package, ship, and run applications and their dependencies in isolated containers. It simplifies deploying applications on different servers without modification.
```

#### 6\. Integrating with Hello-GenAI

Next, we'll integrate the model into a Docker-based application using **hello-genai**. This will allow us to access the model through a web interface.

1. **Download the Hello-GenAI Project**

Start by cloning the hello-genai repository:

```bashgit clone https://github.com/docker/hello-genai.git
```

2. Modify .env file with the local LLM name

```
# Configuration for the LLM service
LLM_BASE_URL=http://model-runner.docker.internal/engines/llama.cpp/v1

# Configuration for the model to use
LLM_MODEL_NAME=ai/smollm2
```

2. **Modify `docker-compose.yml`**

In the `hello-genai` directory, open the `docker-compose.yml` file and make the following changes:

```
version: '3.8'

services:
  python-genai:
    build:
      context: ./py-genai
      dockerfile: Dockerfile
    ports:
      - "8081:8081"
    environment:
      - PORT=8081
      - LOG_LEVEL=INFO
    env_file:
      - .env
    restart: unless-stopped  # Restart policy added here
    extra_hosts:
      - "host.docker.internal:host-gateway"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8081/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    volumes:
      - ./py-genai:/app
    deploy:
      mode: detached

networks:
  default:
    name: hello-genai-network
    driver: bridge
```

3. **Build and Start the Docker Containers**

Run the following command to build and start the containers:

```
docker-compose up --build
```

4. **Verify the Container is Running**

Once the containers are up, you can check the status with:

```bashdocker ps -a
```

You should see something like this:

```
CONTAINER ID   IMAGE                      COMMAND           CREATED          STATUS                      PORTS                    NAMES
8948ae9f73db   hello-genai-python-genai   "python app.py"   11 minutes ago   Up 11 minutes (unhealthy)   0.0.0.0:8081->8081/tcp   hello-genai-python-genai-1
```

This confirms the container is running.

#### 7\. How to Access the GUI

To access the **hello-genai** web interface, open your browser and navigate to `http://localhost:8081`. This will display the GUI where you can interact with the model.

![](/assets/img/posts/Screenshot-2025-04-27-at-5.34.14 AM-1024x506.png)

#### \[Video\] Installing and Running AI Models with Docker Model on macOS

https://youtu.be/a1n\_oIdfgRY

#### Conclusion

In this article, we successfully set up a small AI model (`ai/smollm2`) in Docker on macOS, tested it in both CLI and interactive modes, and integrated it into a web application using **hello-genai**. This setup provides an easy way to experiment with AI models without the need for complex installations or large resource consumption.
