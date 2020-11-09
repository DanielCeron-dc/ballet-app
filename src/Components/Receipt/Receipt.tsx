import React from "react";
import classes from "./Receipt.module.css";

interface Props {
  name: string;
  date: string;
  counter: number;
  payment: number;
}

const Receipt: React.FC<Props> = (props) => {
  return (
    <div className={classes.grow}>
      <h2> nombre: {props.name} </h2>
      <h6> Fecha: {props.date} </h6>
      <h6> numero: {props.counter} </h6>
      <h6> pagado: {props.payment}</h6>
    </div>
  );
};

export default Receipt;
