# File Structure

### When making a new component, follow these steps:

1. Always create a new folder or file in the `src` directory.
2. Always name the file with the component name.
3. Always start the component name with a capital letter.
4. Always export the component.
5. Always import the component in the `App.jsx` file.
6. Always return only one component from the file.

example:

```jsx
// src/components/Button.jsx

export default function Button() {
  return <button>Click me</button>
}
```
or 

```jsx
// src/components/Button.jsx

function Button() {
  return <button>Click me</button>
}

export default Button
```

import the component in the `App.jsx` file.

```jsx
// src/App.jsx

import Button from './components/Button'

export default function App() {
  return <Button />
}