import { useEffect } from "react";
import mole from "./mole.png";

const Mole = (props) => {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 8000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randomSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "15vw" }}
        src={mole}
        onClick={props.handleClick}
        alt="mole"
      />
    </div>
  );
};

export default Mole;
