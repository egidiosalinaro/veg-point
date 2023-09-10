<a name="readme-top"></a>

  <h1 align="center">Veg Point :carrot: :broccoli: </h1>

  <p align="center">
    A vegetarian and vegan recipes website/app. Search for green dishes, filter across them accordingly to your diet, follow step by step instruction to prepare your meal and save your favorite ones.
    <br />
    <a href="https://vegpoint-egidiosalinaro.netlify.app/" target="_blank">Try the app!</a>
  </p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project-question">About The Project</a>
      <ul>
        <li><a href="#built-with-bricks">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-clapper">Getting Started</a>
      <ul>
        <li><a href="#prerequisites-pencil">Prerequisites</a></li>
        <li><a href="#installation-gear">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage-joystick">Usage</a></li>
    <li><a href="#roadmap-world_map">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project :question:

<br>

<p align="center">
<img width="300" alt="vegpoint-by-egidiosalinaro" src="https://github.com/egidiosalinaro/veg-point/assets/129901135/0bad8c2d-7b6d-4b32-9f30-47e1885d1995">
<img width="300" alt="vegpoint-by-egidiosalinaro" src="https://github.com/egidiosalinaro/veg-point/assets/129901135/970ba37c-1564-441c-9ede-022a520972e4">
<img width="300" alt="vegpoint-by-egidiosalinaro" src="https://github.com/egidiosalinaro/veg-point/assets/129901135/ff6a0d3f-1d5d-45ad-9dd4-252ddaa8871d">
</p>

The goal of the project is to deliver a veg recipes application aimed to bring new cooking ideas. To do so, I used the <a href="https://spoonacular.com/" target="_blank">Spoonacular</a> API data, fetched using the _axios_ library.

At its startup the application displays a selection of random recipes with photos, servings and preparation time, and a searchbar. The recipes carousel UX/UI is rendered using `React Swiper`. The user can select a recipe to check ingredients and step-by-step cooking instructions, save a favorite recipe in `Local Storage` using the heart `react-icon`, or search for a recipe/ingredient using the searchbar.

Clicking a recipe card takes the user to the recipe dedicated page, using `react-router`, where ingredients, cooking instructions and similar dishes can be found. The user can also use this page to save the recipe to favorites.

Favorites page can be found by clicking on the relevant button in the header, near the searchbar. Saved dishes are fetched using `Local Storage` and info about saved/unsaved recipes are passed across components using `React Context`. In this page the user can also delete a recipe from favorites using the trash `react-icon`.

From any page, the user can search a keyword using the `searchBar` component inside the `Header`. Submitting the form takes the user to the `SearchResults` page, which displays the `RecipesCarousel` component (with consistent style applying to `TodaysPicks` and _Similar Recipes_). The `SearchFilters` component in this page displays a friendly-UX popup for the user to filter search results.

<p align="center">
<img width="300" alt="vegpoint-by-egidiosalinaro" src="https://github.com/egidiosalinaro/veg-point/assets/129901135/792d0938-8391-4e63-9a46-a64c7cdb1b3e">
<img width="300" alt="vegpoint-by-egidiosalinaro" src="https://github.com/egidiosalinaro/veg-point/assets/129901135/2a8ec689-2e03-4588-900e-e2917527687f">
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With :bricks:

I created the app using React: every html element is created with the jsx sintax; style is build using the new <ins><strong>_CSS nesting_</strong></ins> feature\*.

:exclamation::exclamation: `* CSS nesting is a relatively new feature, check its` <a href="https://caniuse.com/css-nesting" target="_blank">browser compatibility</a> `to be sure you have a full user experience of the app.` :exclamation::exclamation:

<p align="left"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> Html5 <br>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a> Css3 <br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> JavaScript ES6 <br>
<a href="https://axios-http.com/" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/e5e56a13-c9e2-48ac-a874-2a0c94dc832f" alt="axios" width="40" height="40"/> </a> Axios <br>
<a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/8c11269d-5b85-4ac4-aeca-f72770507c1f" alt="axios" width="40" height="40"/> </a> Dotenv<br>
<a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> Webpack <br>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> React <br>
<a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/veg-point/assets/129901135/8d4f5b36-f49e-44a0-b3e7-81ee67c51dd8" alt="react" width="40" height="40"/> </a> React Router <br>
<a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/veg-point/assets/129901135/8f59e51e-7d22-4e2d-8b27-df1d03b1c949" alt="react" width="40" height="40"/> </a> React Swiper

</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started :clapper:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br>
I published this code at the link https://vegpoint-egidiosalinaro.netlify.app/ so you can use it, but if you want you can also install it in your device using React:

### Prerequisites :pencil:

You need to have Node and npm installed. You can check the version you have installed running:

- npm
  ```sh
  npm -v
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation :gear:

Once downloaded this repo, in the project directory, you can run:

```sh
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

```sh
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage :joystick:

Use this app to try new green cooking ideas.

At its startup the application displays a selection of random recipes with photos, servings and preparation time, and a searchbar. Select a recipe to check ingredients and step-by-step cooking instructions, save a favorite recipe using the heart icon, or search for a recipe/ingredient using the searchbar.

Favorites page can be found by clicking on the relevant button in the header, near the searchbar. In this page you can also delete a recipe from favorites using the trash icon.

From any page, you can search a keyword/recipe using the search bar and then filter search results accordingly to your diet.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap :world_map:

- [x] fetching API data
- [x] insert searchbar query into API searching machine
- [x] creating components
- [x] saving favorites to local storage
- [x] creating favorites page using context provider
- [x] creating other pages via router
- [x] styles improvements
  - [x] coherent and user-friendly UX/UI
  - [x] CSS nesting
  - [x] learning React Swiper
- [x] final code cleaning and code consistency

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

egidiosalinaro@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
