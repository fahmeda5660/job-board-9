import React from 'react';

const Blog = () => {
    return (
        <div className='padding-container'>
            <div className='card w-full bg-zinc-100  p-8 gap-6 mb-6 mt-8'>
                <p className='text-blue-800'>1. When should we use context Api?</p>
                <p><span className='text-green-600'>Answer:</span> The React Context API can be used by a React application to create passable global variables. This is a different method from "prop drilling," which comprises handing down props from grandparents to grandchildren to parents and so forth.When several components at various nesting levels need to have access to a certain piece of data, we generally use context Api.</p>
            </div>
            <div className='card w-full bg-zinc-100  p-8 gap-6 mb-6'>
                <p className='text-blue-800'>2. What is React Custom Hook?</p>
                <p><span className='text-green-600'>Answer:</span> We use custom hook so that we can share logic between components and we can use custom hooks to call others hooks. Firstly, We have to start writing custom hook function with use word. Inside the custom hook function, we need to define the state such as useState and useEffect to manage side effects. And finally, need to return array or object containing the state.</p>
            </div>
            <div className='card w-full bg-zinc-100  p-8 gap-6 mb-6'>
                <p className='text-blue-800'>3. whats the work of useRef?</p>
                <p><span className='text-green-600'>Answer:</span> useRef is a React Hook that permit us reference a value that's not needed for rendering that means returns a mutable reference object.<br></br></p>
                <p>useRef hook work:</p>
                <span>1. Access DOM elements, </span>
                <span>2. Store mutable data, </span>
                <span>3. Store previous values. </span>
                <span>4. Media playback. </span>
                <span>5. Complex animation triggering. </span>
                <span>6. Elements affecting state. </span>
                <span>7. Accessing functional components. </span>
            </div>
            <div className='card w-full bg-zinc-100 p-8 gap-6 mb-6'>
                <p className='text-blue-800'>4. How does useMemo work?</p>
                <p><span className='text-green-600'>Answer:</span> use Memo hooks are used to improve a component's performance by jotting down the outcomes of calculations or functions. The use memo hook returns the memoized value passed in the callback as the first argument and the second argument is the dependency array. The dependant array determines the value that the function will cash. The callback method is updated and re-called whenever the value of the dependency array changes.</p>
            </div>
        </div>
    );
};

export default Blog;