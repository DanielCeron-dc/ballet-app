import React, { useState, useEffect } from "react";
import useForm from "../../../Components/Forms/useForm";
import Form from "../../../Components/Forms/Form";

import formInterface from "../../../Components/Forms/FormInterface";
import ISelectedMonth from "../../../interfaces/selectedMonth";

import { useDispatch } from "react-redux";
import { postDescriptionThunk } from "../../../store/StudentsSlice";

interface Props {
  studentID: string | undefined;
  description: string;
  closeFormFunc: () => void;
}

const ModifyStudentDescriptionForm: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [form, updateForm, cleanForm] = useForm({
    description: {
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholer: "descripción",
      },
      value: props.description,
      validation: {
        required: true,
      },
      style: {},
      valid: false,
    } as formInterface,
  });
  const submitHandler = () => {
    props.studentID && dispatch(postDescriptionThunk(props.studentID, form["description"].value));
    props.closeFormFunc();
  };

  return (
    <Form
      title="Descripción"
      form={form}
      updateValues={updateForm}
      submit={submitHandler}
      button="actualizar descripción"
    />
  );
};
export default ModifyStudentDescriptionForm;
