import { useState } from "react";

export const Count = () => {

  const [count, setCount] = useState(1)

  //const count = 1 // Обычная переменная

  function handleClick() {
    setCount(count + 1)
  }
  return (
    <>
      {/* <p>Count props: {this.props.count}</p> */}
      <p>Count state: {count}</p>
      <button type="button" onClick={handleClick}>click</button>

    </>
  )
}
