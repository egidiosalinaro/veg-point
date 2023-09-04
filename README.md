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
<p align="center"><img width="458" alt="tenzies-game-by-egidiosalinaro" src="https://github.com/egidiosalinaro/tenzies-game/assets/129901135/ac2cc75d-f6fb-4e4e-99da-87c394f2f3a8"></p>

The goal of the project is to deliver a veg recipes application aimed to bring new cooking ideas. To do so, I used the <a href="https://spoonacular.com/" target="_blank">Spoonacular</a> API data, fetched using the _axios_ library.
  
At its startup the application displays a selection of random recipes with photos, servings and preparation time, and a searchbar. The recipes carousel UX/UI is rendered using `React Swiper` The user can select a recipe to check ingredients and step-by-step cooking instructions, save a favorite recipe in `Local Storage` using the heart `react icon`, or search for a recipe/ingredient using the searchbar.

Clicking a recipe card takes the user to the recipe dedicated page, using `react-router`, where ingredients, cooking instructions and similar dishes can be found. The user can also use this page to save the recipe to favorites.

Favorites page can be found by clicking on the relevant button in the header, near the searchbar. Saved dishes are fetched using `Local Storage` and info about saved/unsaved recipes are passed across components using `React Context`. In this page the user can also delete a recipe from favorites using the trash `react-icon`.

From any page, the user can search a keyword using the `searchBar` component inside the `Header`. Submitting the form takes the user to the `SearchResults` page, which displays the `RecipesCarousel` component (with consistent style applying to `TodaysPicks` and _Similar Recipes_). The `SearchFilters` component in this page displays a friendly-UX popup for the user to filter search results.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With :bricks:

JavaScript is basically all I used to bootstrap this project.
I created the app using React: every html element is created with the jsx sintax; style is build using the new <ins><strong>*CSS nesting*</strong></ins> feature*.

:exclamation::exclamation: `* CSS nesting is a relatively new feature, check its` <a href="https://caniuse.com/css-nesting" target="_blank">browser compatibility</a> `to be sure you have a full user experience of the app.` :exclamation::exclamation:

<p align="left"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> Html5 <br>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a> Css3 <br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> JavaScript ES6 <br>
<a href="https://axios-http.com/" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/e5e56a13-c9e2-48ac-a874-2a0c94dc832f" alt="axios" width="40" height="40"/> </a> Axios <br>
<a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/8c11269d-5b85-4ac4-aeca-f72770507c1f" alt="axios" width="40" height="40"/> </a> Dotenv<br>
<a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> Webpack <br>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> React</p>

![swiper-logo](https://github.com/egidiosalinaro/veg-point/assets/129901135/8f59e51e-7d22-4e2d-8b27-df1d03b1c949)<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M97.5869496,9.51093626 C115.83804,20.7848256 128,40.9721238 128,64 C128,99.346224 99.346224,128 64,128 C56.2920179,128 48.9022945,126.637372 42.0606106,124.137797 L41.3296807,123.865645 L42.5199148,123.48344 L44.0499006,122.981598 L44.8047554,122.729449 L44.8047554,122.729449 L45.5528525,122.476476 L47.0287766,121.968044 L48.477679,121.456268 L49.8995657,120.941118 L51.2944429,120.422561 L51.9817549,120.161995 L53.3361292,119.638268 C54.7663971,119.077773 56.1505947,118.511327 57.4887554,117.938757 L58.4837445,117.508179 L59.7032082,116.966702 C60.2391997,116.725238 60.7672019,116.482694 61.2872173,116.239057 L62.0612505,115.87278 L63.1998411,115.320271 L63.7590314,115.042615 L63.7590314,115.042615 L64.3114862,114.76402 L65.3961918,114.203997 C74.5017145,109.427674 80.6883363,104.239002 83.9729034,98.5499653 C90.9321253,86.4962393 84.8542511,73.6150855 67.4065187,60.4830885 L65.9866432,59.4185495 L65.1241488,58.7570907 L64.2867532,58.1006716 L63.4743719,57.4492672 L62.6869203,56.8028527 L62.3025167,56.4815088 L62.3025167,56.4815088 L61.9243138,56.161403 L61.1864678,55.5248932 L60.6492814,55.0507377 L60.6492814,55.0507377 L60.1259396,54.5793364 L59.4496246,53.9550673 L58.7977741,53.3356509 L58.1703034,52.7210621 L57.865684,52.4155703 L57.865684,52.4155703 L57.5671278,52.1112761 L56.9881629,51.5062679 C50.0910281,44.1742986 48.550875,37.8976624 51.6821025,32.4742173 C53.275799,29.713854 56.0387768,26.999998 59.9662039,24.3569485 L60.4430842,24.040124 L61.1940488,23.5569049 C61.5336196,23.3425039 61.8809347,23.1285905 62.2359916,22.9151777 L62.7743828,22.5954356 L63.603739,22.1172522 L64.4592124,21.6408141 L65.1179529,21.2846511 L65.1179529,21.2846511 L65.7913778,20.9295026 L66.7121153,20.4575739 C67.4124544,20.1043216 68.1348104,19.7526404 68.8791706,19.4025938 L69.6308651,19.0530944 L70.6559388,18.5888147 L71.1782513,18.3574212 L72.2424237,17.8961475 L72.7842819,17.6662758 L73.887538,17.2080833 L74.4489343,16.9797709 L75.5912592,16.5247346 L76.1721862,16.2980192 L77.353565,15.8462143 L78.5609715,15.3966054 L79.174433,15.1726349 L80.4208685,14.7263826 L81.6933149,14.2824097 L82.9917658,13.8407497 L83.6507409,13.6207974 L84.9881859,13.1826691 L86.3516187,12.7469371 L87.7410327,12.3136347 L89.1564212,11.8827954 L90.5977776,11.4544525 L92.4359804,10.9225852 L94.3147346,10.394736 L96.6227494,9.76671243 L97.5869496,9.51093626 Z M64,0 C71.7830114,0 79.2415381,1.38928435 86.1411179,3.93339103 L86.8782091,4.21038217 L86.4108627,4.35186467 L84.1313124,5.0545346 L83.3848908,5.2905768 L81.9121853,5.76541455 L80.4663248,6.24395126 L79.0473024,6.72622031 L77.6551115,7.21225509 L76.2897456,7.70208898 L75.6171199,7.94844102 L73.9648828,8.56854028 L72.3545311,9.19471909 L71.0963985,9.70008321 L70.4773795,9.95425044 L69.2594321,10.4655761 C56.8123589,15.7699668 48.6548341,21.7176 44.7538993,28.4742173 C37.9453585,40.2669559 44.1208291,52.9796592 61.5702618,66.1081375 L62.9900625,67.1727537 L63.8522936,67.8346365 L64.6892575,68.491774 L65.09829,68.8185721 L65.8975078,69.468645 L66.4804703,69.9531308 L66.4804703,69.9531308 L67.0493707,70.4349994 L67.7860906,71.0734406 L68.1451248,71.3909334 L68.8445933,72.0224812 C69.2263095,72.3720718 69.5965761,72.7195512 69.9554568,73.0649416 L70.4852463,73.5814631 L71.248012,74.3504059 L71.9726186,75.1123909 C78.8402712,82.495364 80.3081527,88.8974997 77.0447002,94.5499653 C74.933031,98.2074836 70.9013706,101.807999 64.958951,105.303275 L64.4134675,105.620736 L63.5293583,106.121564 L62.6189315,106.620891 C62.1058295,106.897871 61.5805462,107.174142 61.0430864,107.449677 L60.227765,107.862426 L59.2252746,108.356245 L58.1964941,108.848418 L57.1414295,109.338914 L56.6040425,109.583523 L55.5095633,110.071443 L54.3888152,110.557607 L53.2418044,111.041982 L52.6584524,111.283488 L51.4720589,111.76512 L50.869019,112.005238 L50.869019,112.005238 L50.259418,112.244884 L49.0205357,112.722748 L47.755418,113.19868 L46.4640712,113.672647 L45.1465013,114.144619 L43.8027143,114.614564 L43.1209914,114.848766 L41.7378904,115.315609 L41.0365138,115.548243 L39.6141124,116.011914 L38.1655184,116.47343 L36.3179518,117.047246 L34.4294807,117.617582 L32.8892605,118.071305 L30.739698,118.689489 C12.3072163,107.455464 0,87.1649844 0,64 C0,28.653776 28.653776,0 64,0 Z" transform="translate(.335 .835)" fill="#0080FF"/> React Swiper</svg>

![react-router-stacked-color](https://github.com/egidiosalinaro/veg-point/assets/129901135/8d4f5b36-f49e-44a0-b3e7-81ee67c51dd8) React Router





<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started :clapper:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br>
I published this code at the link https://vegpoint-egidiosalinaro.netlify.app/ so you can use it, but if you want you can also install it in your device using React:


### Prerequisites :pencil:

You need to have Node and npm installed. You can check the version you have installed running:
* npm
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

At its startup the application displays game instructions. User can decide whether to play showing numbers or dice faces, using the relevant button.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap :world_map:

- [x] generate random numbers
- [x] roll dice functions
- [x] hold dice functions
- [x] winning conditions
- [x] rolls counter and timer
- [x] saving scores to user local storage
- [x] styles improvements
    - [x] coherent color palette
    - [x] organized Sass files
    - [x] styled component for conditional dice faces rendering


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

egidiosalinaro@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

