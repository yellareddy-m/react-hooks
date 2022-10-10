import { useState } from "react";
import Counter from "./components/counter/Counter";
import UseEffectDemo from "./components/use-effect-demo/useEffectDemo";
import useLocalStorage from "./useLocalStorage";

function App() {

    const [name, setName] = useLocalStorage('');

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Counter />
            <UseEffectDemo />
        </>
    );
}

export default App;
