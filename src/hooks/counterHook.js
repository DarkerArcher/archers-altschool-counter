import { useState } from "react";

const useCounter = (initialCount) => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value: count,
        increment: () => setCount(prevCount => prevCount + 1),
        decrement: () => setCount(prevCount => prevCount - 1),
        reset: () => setCount(0),
        input: value,
        onChange: handleChange,
        set: () => setCount(parseInt(value))
    };
};

export default useCounter