# React Native ToDo App: A simple react native / expo toDo app


## Features

- Expo SDK 44
- iOS and Android
- React Navigation v6
- PropTypes

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

Install: `yarn` or `yarn install`

Run Project Locally: `yarn start`

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

**Update Linting Packages:**

```
yarn add @babel/core eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native prettier --dev
```

## Available Commands

- run: `yarn start` to start the development server
- android: `yarn android` initialize the `expo start --android` command
- ios: `yarn ios` initialize the `expo start --ios` command 
- web: `yarn web` initialize the `expo start --web` command
- eject: `yarn eject` initialize the `expo eject` command
