# React useEffect Infinite Loop

This repository demonstrates a common React bug: an infinite loop caused by incorrectly updating state within a `useEffect` hook's dependency array. 

The `bug.js` file shows the problematic code, where the `setCount` function updates the `count` state. Because `count` is in the dependency array, the effect runs continuously, leading to an infinite loop and potential performance issues. 

The `bugSolution.js` file provides a corrected version, demonstrating how to avoid the infinite loop.