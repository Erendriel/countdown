# Countdown

## Improved countdown

The below component was designed to count down the days until our CTO's birthday, but it still needs some work. How can you make the implementation better?

## Improvements made:

- First I started making a new component called CountdownHooks, this because hooks are the most new feature for React, giving us more efficiency by coding. These make code even more readable.
- Then installed Material UI to add new feature what I called "TipsList" only for UX purpose.
- Also added cdn Material Design to show the Date icon.
- I made the Countdown functionality, improving the old one by using hooks such as setInterval, useRef, useEffect and useState.
- Last but not least, FIREWORKS!!. These would show up when countdown runs out.

**Do a critique:** The current implementation isn't perfect. How could it be improved?

- The first thing I saw was the lack of hooks. So I did my own Component to use them.
- Other thing that I would change would be allowing the component to take in the person's actual birthday with the year they were born. Calculate remaining time left from current year by determining negative values. If the Birthday has passed, then set the Birthday countdown for next year.

* Pick an area of improvement to implement.
* What would happen to the current code if the date were changed, the page layout was changed or the format was changed?

- Actually, the date was wrong, and the flow of data makes the child component getting NaN instead of the real number, first thing to do was changing the format, then adding curly braces to grap this and the issue was resolved.

* Does the current implementation follow best practices for HTML, CSS, JS and React?

- Well, there was some small things, like a "," in App.js after Countdown component that shouldn't be there.
  CSS was doing kind of nothing, just the header was modified. So I had to clear the App.css and made my own styles. Adding these into the style folder.

**Spice it up:** Let's be honest, this countdown could be a whole lot more exciting.

- What could you do to create a greater sense of urgency?
- How would you make this countdown more aesthetically pleasing?

* I Added a background image, and a functionallity that if the time runs out a fireworks would show, also added a slider with tips that what you could do for a party

- Trust your design instincts, and explain how your design choices impact the user experience

* The design I made is to make it friendlier, a little bit more colorfull

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
