import logo from './logo.svg';
import styles from './App.module.css';
import { createEffect, createSignal } from 'solid-js';

// const [count, setCount] = createSignal(0);
// console.log(count());

// setCount(count() + 1);
// console.log(count());

function App() {
  const [count, setCount] = createSignal(0);
  const [count2, setCount2] = createSignal(0);

  // se encarga de ejecutarse cada vez que el valor cambie o se inicie la signal
  createEffect(() => {
    console.log("Count changed to " + count());
    // console.log("Count2 changed to " + count2()); // si no se incluye, al hacer un cambio en count2() no se ejecuta ya que el createEffect revisa sus dependencias internas para saber si se debe ejecutar
  });

  createEffect(() => {
    sessionStorage.setItem("count", count());
  });

  return (
    <div class={styles.App}>
      <h1>Count: {count()}</h1>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <button onClick={() => setCount2(count2() + 1)}>Increment 2</button>
    </div>
  );
}

export default App;
