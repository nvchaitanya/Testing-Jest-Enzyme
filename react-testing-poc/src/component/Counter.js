import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        if(count > 0){
            setCount(count-1);
        }
    };

    return(
        <div>
            <h2 className="app-title">This is Counter Example</h2>
            <h5 id="count-value">{count}</h5>
            <button id="increment-btn" onClick={() => setCount(count+1)}>Increment</button>
            <button id="decrement-btn" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;