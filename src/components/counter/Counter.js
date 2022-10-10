import { useState } from "react";

function countInitialState() {
    console.log('run function');
    return 4;
}

function Counter() {
    // this state computaion runs only once
    const [count, setCount] = useState(countInitialState);

    // this runs every time the component re-renders
    // const [count, setCount] = useState(countInitialState());


    function decrementCount() {
        // incorrect way od decrementing twice 
        setCount(count - 1);
        setCount(count - 1);
    }

    function incrementCount() {
        // correct way of incrementing twice
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <h3>
                In this example, you see that count is only decremented by one,
                even when there are two setCount calls with one decrement each time.
            </h3>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default Counter;

