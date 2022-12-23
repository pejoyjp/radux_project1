import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {increment,
    decrement,
    incrementByAmount,
    reset
} from '../features/counter/counterSlice'

const Item = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>dispatch(increment())}>
                +
            </button>
            {count}
        </div>
    );
};

export default Item;