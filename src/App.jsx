import logo from './logo.svg';
import styles from './App.module.css';
import { createEffect, createMemo, createSignal } from 'solid-js';

// const [count, setCount] = createSignal(0);
// console.log(count());

// setCount(count() + 1);
// console.log(count());

function App() {
  const [count, setCount] = createSignal(0);
  const [count2, setCount2] = createSignal(0);

  // signals derivados
  const doubleCount = () => count() * 2; // una funciona que tiene un signal con el proceso que se haga con el signal

  // const isDivisibleByThree = () => count() % 3 === 0;
  // signals memoizados -> se ejecutan solo cuando el valor cambia
  const isDivisibleByThree = createMemo(() => count() % 3 === 0);

  // se encarga de ejecutarse cada vez que el valor cambie o se inicie la signal
  createEffect(() => {
    console.log('Count changed to ' + count());
    // console.log("Count2 changed to " + count2()); // si no se incluye, al hacer un cambio en count2() no se ejecuta ya que el createEffect revisa sus dependencias internas para saber si se debe ejecutar
  });

  createEffect(() => {
    sessionStorage.setItem('count', count());
  });

  // gracias al memo, el effect solo se ejecuta cuando el valor cambia, es decir, de true a false o viceversa
  createEffect(() => {
    console.log('Divisible by three changed to ' + isDivisibleByThree());
  });


  return (
    <div class={styles.App}>
      <h1>Count: {count()}</h1>
      <h2>Double count: {doubleCount()}</h2>
      <h2>Is divisible by three: {isDivisibleByThree() ? 'Yes' : 'No'}</h2>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <button onClick={() => setCount2(count2() + 1)}>Increment 2</button>
    </div>
  );
}

export default App;
