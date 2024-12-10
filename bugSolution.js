```javascript
// This corrected code includes the key prop, fixing the warning.
function MyComponent({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li> // Added key prop
      ))}
    </ul>
  );
}
```