import React, { useEffect } from "react";
import { firestore } from "../../firebase";
import { useDispatch } from "react-redux";
import { Fetchstudents } from "../../store/StudentsSlice";

import Table, { Column as InterfaceColumn, Row as InterfaceRow } from "../UI/Table/Table";
import CheckBox from "../UI/CheckBox/CheckBox";
import colors, { Icolors } from "../../tools/colors";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import IconButton from "../UI/IconButton/IconButton";
import PaymentIcon from "@material-ui/icons/Payment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CallIcon from "@material-ui/icons/Call";
import LockIcon from "@material-ui/icons/Lock";
import BuildIcon from "@material-ui/icons/Build";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import Group from "../../interfaces/Group";
import IStudent, { IMensualidad } from "../../interfaces/student";
import ISelectedMonth from "../../interfaces/selectedMonth";

interface Props {
  tableColor: string;
  students: IStudent[];
  selectedGroup: null | Group;
  changePendienteState: (student: IStudent, PendienteKey: string) => void;
  openMonthlyPayment: (student: ISelectedMonth) => void;
  openDescriptionForm: (student: IStudent) => void;
  openEditStudentForm: (student: IStudent) => void;
}

const StudentsTable: React.FC<Props> = (props) => {
  console.log("RENDERING STUDENTS TABLE" + props.students);
  const dispatch = useDispatch();
  const { students } = props;

  useEffect(() => {
    const unsubscribe = firestore.collection("students").onSnapshot((snapshot) => {
      const studentsUpdate: IStudent[] = snapshot.docs.map((student) => ({
        name: student.get("name"),
        email: student.get("email"),
        born: student.get("born"),
        smartphone: student.get("smartphone"),
        fatherName: student.get("fatherName"),
        fatherPhone: student.get("fatherPhone"),
        motherName: student.get("motherName"),
        motherPhone: student.get("motherPhone"),
        admissionDate: student.get("admissionDate"),
        group: student.get("group"),
        id: student.id,
        pendiente: student.get("pendiente"),
        mensualidad: student.get("mensualidad"),
        description: student.get("description"),
      }));

      dispatch(Fetchstudents({ students: studentsUpdate }));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  let color = colors[props.tableColor as keyof Icolors];

  let arrayColumns: InterfaceColumn[] = [
    { width: 4, text: "" },
    { width: 4, text: "n°" },
    { width: 6, text: "Ingreso" },
    { width: 5, text: "Matricula" },
    { width: 5, text: "nombre" },
    { width: 5, text: "edad" },
    { width: 5, text: "pendiente" },
    { width: 6, text: "Nacimiento" },
    { width: 6, text: "Mensualidad" },
  ];

  function monthsHoverText(month: string, student: IStudent): string | undefined {
    let Month = student.mensualidad[month as keyof IMensualidad];
    if (Month.complete) {
      return month + ": " + Month.paid + "              Descripción: " + Month.description;
    } else {
      return undefined;
    }
  }

  let dataRows: InterfaceRow[] = students.map((student, index) => {
    return {
      text: "column",
      data: [
        <React.Fragment>
          <IconButton /* config button */
            displayHoverElement={false}
            buttonColor="rgba(80, 82, 88, 0.401)"
            buttonColorHover="rgb(80, 82, 88)"
            tooltipColor={color[0]}
            onClick={() => props.openEditStudentForm(student)}
          >
            <BuildIcon fontSize="small" />
          </IconButton>
          <IconButton /* description button */
            displayHoverElement={false}
            hoverText={student.description.value}
            onClick={() => props.openDescriptionForm(student)}
            tooltipColor={color[0]}
            buttonColor={color[0]}
            tooltipButtonColor={color[0]}
          >
            <QuestionAnswerIcon fontSize="small" />
          </IconButton>
        </React.Fragment>,
        index,
        student.born,
        "150.000",
        student.name,
        "edad",
        <div>
          <CheckBox
            onClick={() => props.changePendienteState(student, "matricula")}
            hoverText="matricula"
            hoverColor={color[2]}
            selectedColor={color[0]}
            selected={student.pendiente?.matricula}
          >
            <PaymentIcon style={{ color: "white", fontSize: 20 }}></PaymentIcon>{" "}
          </CheckBox>
          <CheckBox
            onClick={() => props.changePendienteState(student, "foto")}
            hoverText="foto"
            hoverColor={color[2]}
            selectedColor={color[0]}
            selected={student.pendiente?.foto}
          >
            <AssignmentIndIcon style={{ color: "white", fontSize: 20 }}></AssignmentIndIcon>{" "}
          </CheckBox>
          <CheckBox
            onClick={() => props.changePendienteState(student, "registro")}
            hoverText="registro civil"
            hoverColor={color[2]}
            selectedColor={color[0]}
            selected={student.pendiente?.registro}
          >
            <AccountBalanceIcon style={{ color: "white", fontSize: 20 }}></AccountBalanceIcon>{" "}
          </CheckBox>
          <CheckBox
            onClick={() => props.changePendienteState(student, "medico")}
            hoverText="medico"
            hoverColor={color[2]}
            selectedColor={color[0]}
            selected={student.pendiente?.medico}
          >
            <LocalHospitalIcon style={{ color: "white", fontSize: 20 }}></LocalHospitalIcon>{" "}
          </CheckBox>
          <CheckBox
            onClick={() => props.changePendienteState(student, "salud")}
            hoverText="salud"
            hoverColor={color[2]}
            selectedColor={color[0]}
            selected={student.pendiente?.salud}
          >
            <EmojiEmotionsIcon style={{ color: "white", fontSize: 20 }}></EmojiEmotionsIcon>{" "}
          </CheckBox>
          <CheckBox
            onClick={() => props.changePendienteState(student, "whatsapp")}
            hoverText="WhatsApp"
            hoverColor={color[2]}
            selectedColor={color[0]}
            selected={student.pendiente?.whatsapp}
          >
            <CallIcon style={{ color: "white", fontSize: 20 }}></CallIcon>{" "}
          </CheckBox>
          <CheckBox
            onClick={() => props.changePendienteState(student, "contrato")}
            hoverText="contrato"
            hoverColor={color[2]}
            selectedColor={color[0]}
            selected={student.pendiente?.contrato}
          >
            <LockIcon style={{ color: "white", fontSize: 20 }}></LockIcon>{" "}
          </CheckBox>
        </div>,
        student.admissionDate,
        <div>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "febrero",
                idStudent: student.id ? student.id : "it should not happen",
                student: student,
              })
            }
            hoverText={monthsHoverText("febrero", student)}
            hoverColor={color[2]}
            selected={student.mensualidad.febrero.complete}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>F</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "marzo",
                idStudent: student.id ? student.id : "it should not happen",
                student: student,
              })
            }
            selected={student.mensualidad.marzo.complete}
            hoverText={monthsHoverText("marzo", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>M</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "abril",
                idStudent: student.id ? student.id : "it should not happen",
                student: student,
              })
            }
            selected={student.mensualidad.abril.complete}
            hoverText={monthsHoverText("abril", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>A</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "mayo",
                idStudent: student.id ? student.id : "it should not happen",
                student,
              })
            }
            selected={student.mensualidad.mayo.complete}
            hoverText={monthsHoverText("mayo", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>M</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "junio",
                idStudent: student.id ? student.id : "it should not happen",
                student,
              })
            }
            selected={student.mensualidad.junio.complete}
            hoverText={monthsHoverText("junio", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>J</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "julio",
                idStudent: student.id ? student.id : "it should not happen",
                student,
              })
            }
            selected={student.mensualidad.julio.complete}
            hoverText={monthsHoverText("julio", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>J</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "agosto",
                idStudent: student.id ? student.id : "it should not happen",
                student,
              })
            }
            selected={student.mensualidad.agosto.complete}
            hoverText={monthsHoverText("agosto", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>A</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "septiembre",
                idStudent: student.id ? student.id : "it should not happen",
                student,
              })
            }
            selected={student.mensualidad.septiembre.complete}
            hoverText={monthsHoverText("septiembre", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>S</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "octubre",
                idStudent: student.id ? student.id : "it should not happen",
                student,
              })
            }
            selected={student.mensualidad.octubre.complete}
            hoverText={monthsHoverText("octubre", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>O</h2>
          </CheckBox>
          <CheckBox
            onClick={() =>
              props.openMonthlyPayment({
                studentName: student.name,
                Month: "noviembre",
                idStudent: student.id ? student.id : "it should not happen",
                student,
              })
            }
            selected={student.mensualidad.noviembre.complete}
            hoverText={monthsHoverText("noviembre", student)}
            hoverColor={color[2]}
            selectedColor={color[0]}
          >
            <h2 style={{ display: "inline" }}>N</h2>
          </CheckBox>
        </div>,
      ],
    };
  });

  console.log(dataRows);

  return students.length !== 0 ? (
    <Table rows={dataRows} columns={arrayColumns} color={color[0]} />
  ) : (
    <h1>
      no hay estudiantes en este grupo
      <span role="img" aria-label="carita zi">
        🤔
      </span>
    </h1>
  );
};

function areEqual(
  prevProps: Readonly<React.PropsWithChildren<Props>>,
  nextProps: Readonly<React.PropsWithChildren<Props>>
): boolean {
  return prevProps.students === nextProps.students;
}

export default React.memo(StudentsTable, areEqual);
