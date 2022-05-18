import React from 'react';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from '../../components/counte';

interface counterType {
    counter: {
        number: number;
    };
}

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: counterType) => state.counter.number);

    const plusClick = () => {
        dispatch({ type: 'PLUS_CLICK_REQUEST', payload: counter });
    };

    const minusClick = () => {
        dispatch({ type: 'MINUS_CLICK_REQUEST', payload: counter });
    };

    useEffect(() => {
        dispatch({ type: 'COUNTING_NUMBER_REQUEST' });
    }, [counter]);

    return (
        <Responsive>
            <div>
                <h1>counter : {counter}</h1>
                <button
                    onClick={() => {
                        plusClick();
                    }}
                >
                    +1
                </button>
                <button
                    onClick={() => {
                        minusClick();
                    }}
                >
                    -1
                </button>
            </div>
        </Responsive>
    );
};

export default Counter;
