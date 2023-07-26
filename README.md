
## How I worked on this project

My goal was to build a Video library web app and use best practices and put my React learnings for building this project.

- Took design inspiration from dribble here are the [design credits](https://dribbble.com/Rezanmdesign/about)
- Designed a Custom logo for the project in Figma
- Went through the project planning phase by breaking project into different components & views, choosing project tooling with vite as a project bundler, TailwindCSS for styling, Redux for state management.
- Used Youtube API V3 for getting video data, the Home page shows popular videos of US region, each video goes to a Video preview page.


## How to navigate this project


    .
    ├── public                   # static images/icons files
    ├── src
    │   ├── assets
    │   ├── components           # in this folder each entity of the UI has been broken down in to small components.
    │   ├── utils                # Here we have logic of data layer, including redux state management logic, functions and custom react hooks.                
    │   ├── index.css             
    │   ├── main.jsx
    │   └── ...
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── index.html
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    ├── .eslintrc.cjs
    ├── LICENSE
    └── README.md


- Responsive CSS using TailwindCSS can be found [here](https://github.com/ItsMeIshan/vidcore/blob/main/src/index.css)
- Used Redux for state management which can be found in [utils](https://github.com/ItsMeIshan/vidcore/tree/main/src/utils) folder.
- No external library used for fetching data from Youtube API V3, here we have used javascript fetch API for data retrival.

### Components files
Here is the detailed explaination of navigating in the `components` folder.

    

    .
    ├── ...
    ├── src
    │   ├── components
    │   │   ├── shimmer     # contains shimmer UI components that has to be shown before data loads
    │   │   ├── body        # contains components and their respective views that will change according to the routes
    │   │   ├── cards       # contains cards component for different views
    │   │   ├── navbar      # contains all the components related to navbar
    │   │   ├── sidebar     # contains all sidebar components
    │   │   ├── App.jsx     
    │   │   ├── error.jsx
    │   └── ...
    └── ...


## Why I built the project this way

- I've used `Redux` for state management to separate the logic of UI layer with the data layer, by separating the concerns and for local component states I've used `useState` react hook.
- For styling we have used `TailwindCSS` classes because it make the process of writing maintainable CSS really helpful and easier.
- I've tried to follow the best practices for a frontend application and my react learnings to create beautiful and performant user interfaces.

## If I had more time I would change this
- add Live video watching functionality and live chat features, along with the authentication.
- Cache the search results
- setup continuous integration to run tests and ESLint checks on every pull requests.
- Add end to end tests.

## Available Scripts
- After Installing all the node modules with the command in the project home directory: `npm ci`
In the project directory you can run: `npm start`
