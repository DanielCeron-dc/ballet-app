import React from "react";
import Receipt from "../../Components/Receipt/Receipt";
import classes from "./Receipts.module.css";

interface Props {}

const Receipts: React.FC<Props> = (props) => {
  return (
    <div className={classes.Receipts}>
      {" "}
      <Receipt name="ejemplo" date="05/06/2020" counter={1} payment={150.0}></Receipt>
      <Receipt name="ejemplo2" date="05/06/2020" counter={2} payment={150.0}></Receipt>
      <Receipt
        name="ejemplo kadshsadkjhdaskjbsad  kiadkladhlkasnd adlasdjlk a opdaoidasdilhdal"
        date="05/06/2020"
        counter={3}
        payment={150000}
      ></Receipt>
      <Receipt name="ejemplo" date="05/06/2020" counter={4} payment={150.0}></Receipt>
      <Receipt name="ejemplo2dassdfada" date="05/06/2020" counter={5} payment={150.0}></Receipt>
      <Receipt name="ejemplo" date="05/06/2020" counter={6} payment={150.0}></Receipt>
      <Receipt name="ejemplo2" date="05/06/2020" counter={7} payment={150.0}></Receipt>
      <Receipt name="ejemplo" date="05/06/2020" counter={8} payment={150.0}></Receipt>
      <Receipt name="ejemplo2dasdad" date="05/06/2020" counter={9} payment={150.0}></Receipt>
      <Receipt name="ejemplo" date="05/06/2020" counter={10} payment={150.0}></Receipt>
      <Receipt name="ejemplo2" date="05/06/2020" counter={1} payment={150.0}></Receipt>
      <Receipt
        name="ejemplodasdasdsdalkadj   adshdkajhdkjhsadklds"
        date="05/06/2020"
        counter={1}
        payment={150.0}
      ></Receipt>
      <Receipt name="ejemplo2" date="05/06/2020" counter={1} payment={150.0}></Receipt>
    </div>
  );
};

export default Receipts;
