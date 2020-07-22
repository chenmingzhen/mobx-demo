import {useState, useEffect} from 'react';

export default function useCount(initCount) {
    const [count, setCount] = useState(initCount);
    useEffect(() => {
        console.log('count change');
    }, [count]);
    return count;
}
