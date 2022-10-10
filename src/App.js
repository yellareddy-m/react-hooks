import { useState } from "react";
import Counter from "./components/counter/Counter";
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
        </>
    );
}

export default App;
