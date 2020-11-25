import React, { useState } from "react";
import Receipt from "../../Components/Receipt/Receipt";
import classes from "./Receipts.module.css";

interface Props {}

const Receipts: React.FC<Props> = (props) => {
  return (
    <div className={classes.Receipts}>
      {" "}
      <Receipt name="ejemplo" date={new Date("05/06/2020")} number={1} cost={150.0} createdBy="Creador"></Receipt>
      <Receipt name="ejemplo" date={new Date("05/06/2020")} number={1} cost={150.0} createdBy="Creador"></Receipt>
      <Receipt name="ejemplo" date={new Date("05/06/2020")} number={1} cost={150.0} createdBy="Creador"></Receipt>
      <Receipt
        name="ejemlkjadslkjlkajdlkjalkd   sdalkjdla pl  dasdao"
        date={new Date("05/06/2020")}
        number={1}
        cost={150.0}
        createdBy="Creador"
      ></Receipt>
    </div>
  );
};

export default Receipts;
