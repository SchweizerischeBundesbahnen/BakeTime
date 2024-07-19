# The BakerTime App

#### Table Of Contents

- [The BakerTime App](#the-bakertime-app)
      - [Table Of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [Models](#models)
      - [AppBaker](#appbaker)
      - [Pastry](#pastry)
    - [Screens](#screens)
      - [Dashboard](#dashboard)
      - [AppBaker Profile](#appbaker-profile)
      - [Pastry Overview](#pastry-overview)
  - [API](#api)
  - [Getting-Started](#getting-started)
    - [API](#api-1)
  - [Documentation](#documentation)
  - [License](#license)
  - [Contributing](#contributing)
  - [Coding Standards](#coding-standards)
  - [Code of Conduct](#code-of-conduct)

<a id="Introduction"></a>

## Introduction

The BakerTime App is an open source solution that utilizes the AppBakery to provide an overview of ongoing projects (pastries) and plan new ones.

### Models
#### AppBaker
AppBakers are the key resources of the app. They have a name, a specific quota which they work for the AppBakery, and Flavours, which define the technologies mastered by an AppBaker. An AppBaker also has a list of Pastries and the AppBaker's quota per Pastry.

#### Pastry
Pastries are the initiatives of the AppBakery where an AppBaker is involved. A Pastry has a baking type that indicates the type of this baked good, whether it's an innovation initiative, a project for a DSO, an initiative for a circle, vacation, etc. The baked good also has a start time, a duration, and a size that indicates how many AppBakers are needed.

### Screens
#### Dashboard
An overview of all AppBakers showing the workload from today up to the next three months.

#### AppBaker Profile
Here you can see the AppBaker in detail, what flavours they have and which current and future projects are planned.

#### Pastry Overview
This is the detailed view per pastry.

<a id="Getting-Started"></a>

## API
For the backend the [Express framework](https://expressjs.com/) is used.

## Frontend
For the frontend the [Vue.js framework](https://vuejs.org/) with typescript transpilation is used.

## Getting-Started

### API
To start the backend run the following commands from the root dir:
```
cd api
npm install
node app.js
```
To enable log levels below info use this command:
````
LOG_LEVEL=debug node app.js
````

### Frontend
To get started locally, add a .env file at the root of the `frontend` dir with the `VITE_BACKEND_URL` var pointing to the webserver hosted locally above.

Then run the following commands (from `./frontend`):
```
npm install
npm run dev
```


## Documentation

Links to all relevant documentation files, including:

- [CODING_STANDARDS.md](CODING_STANDARDS.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [LICENSE.md](LICENSE.md)

<a id="License"></a>

## License

This project is licensed under GPL v3.0.

<a id="Contributing"></a>

## Contributing

Open-source projects thrive on collaboration and contributions from the community. To encourage others to contribute to your project, you should provide clear guidelines on how to get involved.

This repository includes a [CONTRIBUTING.md](CONTRIBUTING.md) file that outlines how to contribute to the project, including how to submit bug reports, feature requests, and pull requests.

<a id="coding-standards"></a>

## Coding Standards

To maintain a high level of code quality and consistency across your project, you should establish coding standards that all contributors should follow.

This repository includes a [CODING_STANDARDS.md](CODING_STANDARDS.md) file that outlines the coding standards that you should follow when contributing to the project.

<a id="code-of-conduct"></a>

## Code of Conduct

To ensure that your project is a welcoming and inclusive environment for all contributors, you should establish a good [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
