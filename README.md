# Weather App

## Overview

Weather App is a web application that provides weather information for different cities.

## Prerequisites

Before getting started, make sure you have the following software installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Angela-GM/weather-app.git
cd weather-app
```

### 2. Set up the Backend

#### a. Navigate to the back directory and follow these steps:

```bash
cd back
docker-compose build
```

#### b. Start the Docker Containers

```bash
docker-compose up -d
```

### 3. Set up the Frontend

```bash
cd ../front
```

#### a. Install Dependencies

```bash
npm install
```

#### b. Start the React App

```bash
npm run start dev
```

The app will be accessible at http://localhost:5173/

## Usage

Access the Swagger API documentation: http://localhost:3000/docs
Explore the React app: http://localhost:5173/
