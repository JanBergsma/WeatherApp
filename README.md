# WeatherApp

Challenge: Create a weather app using an API. Use Front-end libraries like React or Vue. Don’t look at the existing solution. Fulfill user stories below:

- _User story:_ I can see city weather as default, preferably my current location
- _User story:_ I can search for city
- _User story:_ I can see weather of today and the next 5 days
- _User story:_ I can see the date and location of the weather
- _User story:_ I can see according to image for each type of weather
- _User story:_ I can see the min and max degree each day
- _User story:_ I can see wind status and wind direction
- _User story:_ I can see humidity percentage
- _User story:_ I can see a visibility indicator
- _User story:_ I can see the air pressure number
- _User story(optional):_ I can request my current location weather
- _User story(optional):_ I can convert temperature in Celcius to Fahrenheit and vice versa

Icon: <https://google.github.io/material-design-icons/>

API: <https://open-meteo.com/en/docs#current=temperature_2m,relative_humidity_2m,rain,showers,snowfall,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_direction_10m_dominant&timezone=Europe%2FBerlin&forecast_days=14>

## Technical details

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
