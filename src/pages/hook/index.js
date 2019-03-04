import React, { useState } from 'react';

function ExampleHook() {
  // 声明一个新的状态变量，我们将其称为 "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState('leo')

  const changedInput = (e) => setName(e.target.value)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input value={name} onChange={changedInput} />
    </div>
  );
}

export default ExampleHook