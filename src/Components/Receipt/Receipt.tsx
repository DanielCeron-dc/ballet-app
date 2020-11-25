import React from "react";
import classes from "./Receipt.module.css";
import IReceipt from "../../interfaces/Receipt";

const Receipt: React.FC<IReceipt> = (props) => {
  return (
    <div className={classes.grow}>
      <h2> nombre: {props.name} </h2>
      <h6> Fecha: {props.date.toString()} </h6>
      <h6> numero: {props.number} </h6>
      <h6> pagado: {props.cost}</h6>
      <h6> recibi de: {props.createdBy}</h6>
    </div>
  );
};

export default Receipt;
