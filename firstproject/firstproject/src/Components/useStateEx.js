import React, { useState } from "react";
const UseStateEx = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 5);
    };

    const decrement = () => {
        setCount(count - 5);
    };

    return (
        <>
            <p>
                {count}
            </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </>
    );
}
export default UseStateEx;  