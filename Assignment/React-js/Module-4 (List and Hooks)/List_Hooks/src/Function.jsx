import React, { useState, useEffect } from 'react';

export default function Function() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Component did mount logic
        console.log('Component mounted');

        return () => {
            // Component will unmount logic
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        // Component did update logic
        console.log('Component updated', count);

        return () => {
            // Cleanup before next update
            console.log('Cleanup before update', count);
        };
    }, [count]);

    return (
        <div className='mt-10 mx-auto text-center'>
            <p className='text-xl mb-10'>Count: {count}</p>
            <button type="button" className="bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-white text-2xl" onClick={() => setCount(count + 1)}>Increment</button>
            
        </div>
    );
}