
import React, { useState, useEffect } from "react";
import useForm from "../../../Components/Forms/useForm";
import Form from "../../../Components/Forms/Form";
import { ModifyDescription } from "../../../Components/Forms";
import ISelectedMonth from "../../../interfaces/selectedMonth";

import {useDispatch} from "react-redux";
import {postDescriptionThunk} from "../../../store/StudentsSlice";


interface Props {
    studentID: string | undefined,
}

const ModifyStudentDescriptionForm: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [form, updateForm, cleanForm] = useForm(ModifyDescription);
    const submitHandler = () => {
       props.studentID &&  dispatch(postDescriptionThunk(props.studentID, form["description"].value));
    }


    return <Form form = {form} updateValues = {updateForm} submit = {submitHandler} button = "actualizar descripción"/>



}
export default ModifyStudentDescriptionForm;