# Index

1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Testing](#testing)
   - [Backend Tests (Jest)](#backend-tests-jest)
   - [Frontend Tests (Vitest)](#frontend-tests-vitest)
   - [Test Results and Screenshots](#test-results-and-screenshots)
4. [Screenshots](#screenshots)
5. [Prerequisites](#prerequisites)
6. [Getting Started](#getting-started)
   - [Clone the Repository](#clone-the-repository)
   - [Set up the Backend](#set-up-the-backend)
   - [Set up the Frontend](#set-up-the-frontend)
7. [Usage](#usage)
8. [Author](#author)



# Weather App

## Overview

Weather App is a web application that provides weather information for different cities.

# Technologies Used

- **Backend:**

  - [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
  - [TypeORM](https://typeorm.io/) - An ORM that can run in NodeJS and other JavaScript runtimes.
  - [MySQL](https://www.mysql.com/) - An open-source relational database management system.
  - [Jest](https://jestjs.io/) - A JavaScript testing framework.

- **Frontend:**

  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [React Query](https://react-query.tanstack.com/) - A library for managing, caching, and updating server state in React applications.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
  - [React ChartJS 2](https://www.npmjs.com/package/react-chartjs-2) - A React wrapper for Chart.js, a JavaScript charting library.
  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) - An API for embedding Google Maps into web pages.
  - [Freepik Icons](https://www.freepik.com/) - Free icons for your project.
  - [Axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.
  - [React Icons](https://react-icons.github.io/react-icons/) - A collection of iconic React icons.
  - [Vite](https://vitejs.dev/) - A fast web development build tool.
  - [Vitest](https://vitejs.dev/) - A next-generation frontend testing framework.


- **Development Tools:**

  - [Visual Studio Code](https://code.visualstudio.com/) - A lightweight but powerful source code editor.
  - [Docker](https://www.docker.com/) - A platform for developing, shipping, and running applications in containers.
  - [Postman](https://www.postman.com/) - A collaboration platform for API development.
  - [MySQL Workbench](https://www.mysql.com/products/workbench/) - A visual database design tool.
  - [Swagger](https://swagger.io/) - An API documentation tool.

- **Other Libraries and Utilities:**

  - [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static types.
  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) - An API for embedding Google Maps into web pages.
  - [Freepik Icons](https://www.freepik.com/) - Free icons for your project.

# Testing

## Backend Tests (Jest)

To run backend tests, navigate to the `back` directory and execute the following command:

```bash
cd back
npm run test
```
![Result](https://res.cloudinary.com/drjyg98uv/image/upload/v1701599389/weather-app/wjyducgc6cwolgrotgpi.png)


## Frontend Tests (Vitest)

To run frontend tests, navigate to the `front` directory and execute the following command:

```bash
cd front
npm run test
```
![Result](https://res.cloudinary.com/drjyg98uv/image/upload/v1701599390/weather-app/vxxwi23h8gch93lxum91.png)

  ## Screenshots

| Home Page                                                                                                        | Home Page (Responsive)                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![Home Page](https://res.cloudinary.com/drjyg98uv/image/upload/v1701544183/weather-app/ay6njxahil0rimthzfjh.png) | ![Home Page (Responsive)](https://res.cloudinary.com/drjyg98uv/image/upload/v1701544183/weather-app/tnuvswb16p1cqo8qy4qf.png) |

| City Forecasts                                                                                                        | Statistics                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![City Forecasts](https://res.cloudinary.com/drjyg98uv/image/upload/v1701544183/weather-app/bwrhwhzagflpzo22kdtn.png) | ![Statistics](https://res.cloudinary.com/drjyg98uv/image/upload/v1701544183/weather-app/s2kfhbjdsinlmw15ffcg.png) |

| Today's Weather Map                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------- |
| ![Today's Weather Map](https://res.cloudinary.com/drjyg98uv/image/upload/v1701544183/weather-app/tbqguoveo6lhwwk0vfvo.png) |

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
npm install
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
npm run dev
```

The app will be accessible at http://localhost:5173/

## Usage

Access the Swagger API documentation: http://localhost:3000/docs<br>
Explore the React app: http://localhost:5173/

## Author

[<img src="https://avatars.githubusercontent.com/u/116819605?s=400&u=bae5f7e88a358d3fbbd2f0e8521dda9a57739c70&v=4" width=115><br><sub>Angela Garcia</sub>](https://github.com/Angela-GM)  
