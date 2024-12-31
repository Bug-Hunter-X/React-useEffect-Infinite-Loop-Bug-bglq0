```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: No infinite loop
    // Perform side effect operations here
    console.log('Count updated:', count);
  }, [count]); // Added count to the dependency array

  return <div>Count: {count}</div>;
}
```