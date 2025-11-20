import { useState } from "react";
interface Props {
  text: string;
}
const Button = ({ text }: Props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
          console.log(count + 1);
        }}
      >
        {text}
      </button>
      <p>Contador: {count}</p>
    </>
  );
};

export default Button;
