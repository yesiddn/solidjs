## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## Primitivas reactivas ⚛️

En SolidJS, las primitivas reactivas son funciones y objetos que se utilizan para definir y gestionar el estado de un componente y reaccionar automáticamente a los cambios en ese estado. 🔄

🎣 Una de estas primitivas es el createEffect. 🎯

### createEffect (effect)

✨ El createEffect es un hook que permite ejecutar un efecto secundario, como una función, cuando algún valor reactivo dentro de su alcance cambia. 🔄
El createEffect se ejecutará automáticamente cada vez que alguno de los datos reactivos que se utilizan dentro de su bloque cambie.

### createSignal (signal)

✨ El createSignal es un hook que permite crear un valor reactivo, una función para obtener el valor y otra función para actualizar ese valor. 🔄
