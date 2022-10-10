import { useEffect, useState } from "react";

export default function useEffectDemo() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // this will be called second time when same resource is clicked,
    // after that it won't be called.
    console.log('component render');

    useEffect(() => {
        console.log('This is printed everytime the component re-renders');
    });

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        console.log('Printed only when resource type changes');

        return function() {
            console.log('cleanup code ran');
        }
    }, [resourceType]);

    // you can have written on mount life cycle many times in one component like this. 
    useEffect(() => {
        console.log('printed only on mount');
    }, []);

    // you can add multiple useEffect hooks to the same state variable 
    // sample API request
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(jsonData => setItems(jsonData))
    }, [resourceType]);


    return (
        <>
            <h3>Window width: {windowWidth}</h3>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>

            {/* commenting out this as it takes out most of the space on UI */}
            {/* {items.map(item => <pre key={item.id}>{JSON.stringify(item)}</pre>)} */}
        </>
    );
}
