# ---- Используемый стек технологий ----
1. Redux - Удобная технология для работы с состоянием приложения.
2. Redux-thunk - Служит для асинхронных экшенов.
3. React-router-dom - Удобная технология роутинга для приложения, использовал как для роутинга, так и для защиты роутов.
4. React-redux - Использовал для связывания React и Redux.
5. Moment - Использовал для удобной работы с датой и временем.
6. Webpack - Использовал для удобной сборки приложения.

# ---- Суть работы данного приложения ----
1. Компонент Watch: Состоит из 4 элементов: 1-3 - Часовая стрелка, минутная стрелка, секундная стрелка, каждая из которых принимает функции, которые можно найти в папочке 'src/helpers'; данные функции высчитывают угол поворота стрелки, относительно текущего времени. 4 - Вывод обычного времени, в который приходит параметр time зоны (Красноярск, Москва и т.д.).
2. В Redux храню выбранные города из двух часов: leftCity and rightCity.
3. Защиту роутов сделал при помощи <Redirect /> на главную страницу. Страницы Not Found нет.
4. В папке 'src/containers' лежит файл, в котором прописана основная логика для Select, получения времени.
5. Webpack настроил при помощи команды `yarn eject`.

Чтобы запустить данное приожение: пропишите команду `npm i`

# Getting Started with Create React App

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
