import formInterface, { IOption } from "./FormInterface";
import colors from "../../tools/colors";

let options: IOption[] = Object.keys(colors).map((color) => ({
  value: color,
  displayValue: color,
}));

export const AddGroup = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholer: "nombre",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  } as formInterface,
  color: {
    elementType: "select",
    elementConfig: {},
    options,

    value: "azul",
    validation: {
      required: true,
    },
    valid: true,
  } as formInterface,
};

export const AddStudent = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholer: "nombre",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  } as formInterface,

  email: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholer: "correo",
    },
    value: "",
    validation: {
      isEmail: true,
      required: true,
    },
    valid: false,
  } as formInterface,

  born: {
    elementType: "input",
    elementConfig: {
      type: "date",
      placeholer: "fecha de nacimiento",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  } as formInterface,

  phone: {
    elementType: "input",
    elementConfig: {
      type: "number",
      placeholer: "numero de celular",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  } as formInterface,

  padreNombre: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholer: "nombre del padre o responsable",
    },
    value: "",
    validation: {
      required: true,
    },
    style: {
      width: "calc(50% - 3px)",
      float: "left",
      marginBottom: "10px",
    },
    valid: false,
  } as formInterface,

  padreNumero: {
    elementType: "input",
    elementConfig: {
      type: "number",
      placeholer: "numero de celular del padre",
    },
    value: "",
    validation: {
      required: true,
    },
    style: {
      width: "calc(50% - 3px)",
      float: "right",
      marginBottom: "10px",
    },
    valid: false,
  } as formInterface,

  madreNombre: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholer: "nombre de la madre o responsable #2",
    },
    value: "",
    validation: {
      required: true,
    },
    style: {
      width: "calc(50% - 3px)",
      float: "left",
      marginBottom: "10px",
    },
    valid: false,
  } as formInterface,

  madreNumero: {
    elementType: "input",
    elementConfig: {
      type: "number",
      placeholer: "numero de celular de la Madre",
    },
    value: "",
    validation: {},
    style: {
      width: "calc(50% - 3px)",
      float: "right",
      marginBottom: "10px",
    },
    valid: false,
  } as formInterface,

  dateAdmission: {
    elementType: "input",
    elementConfig: {
      type: "date",
      placeholer: "fecha de ingreso",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  } as formInterface,
};

export const ModifyMonthlyPayment = {
  amount: {
    elementType: "input",
    elementConfig: {
      type: "number",
      placeholer: "total pagado",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  } as formInterface,

  description: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      placeholer: "descripción",
    },
    value: "",
    validation: {
      required: true,
    },
    style: {},
    valid: false,
  } as formInterface,
};

export const ModifyDescription = {
  description: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      placeholer: "descripción",
    },
    value: "",
    validation: {
      required: true,
    },
    style: {},
    valid: false,
  } as formInterface,
};
