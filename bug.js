```javascript
// This code will cause a React warning because the key prop is missing.
function MyComponent({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li> // Missing key prop
      ))}
    </ul>
  );
}
```