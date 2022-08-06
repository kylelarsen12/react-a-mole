import { useEffect } from "react";
import MoleHill from "./molehill.png";

const EmptySlot = (props) => {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 4000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randomSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div style={{ display: "flex" }}>
      <img
        style={{ display: "inline-grid", width: "15vw" }}
        src={MoleHill}
        alt="molehill"
      />
    </div>
  );
};

export default EmptySlot;
