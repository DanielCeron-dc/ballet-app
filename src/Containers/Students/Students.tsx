import React, { useState, useEffect, useCallback } from "react";

import { PostGroupThunk, FetchGroupsFromFirebase } from "../../store/Group.slice";
import { useTypedSelector } from "../../store";
import { useDispatch } from "react-redux";

import Modal from "../../Components/UI/Modal/Modal";
import StudentsTable from "../../Components/StudentsTable/studentsTable";
import GroupsNav, { Group } from "../../Components/GroupNav/GroupsNav";
import Spinner from "../../Components/UI/Spinner/Spinner";

import { AddGroup } from "../../Components/Forms";
import Form from "../../Components/Forms/Form";
import useForm from "../../Components/Forms/useForm";

interface Props {}

const Students: React.FC<Props> = () => {
	const dispatch = useDispatch();

	const groupsRedux: Group[] = useTypedSelector((state) => state.Groups);
	const loadingGroup: boolean = useTypedSelector((state) => !state.LoadingGroup);

	const { form, updateValues, clear } = useForm(AddGroup);
	const [addingGroup, setaddingGroup] = useState(false);
	const [selectedGroup, setselectedGroup] = useState<string | Group>("");

	useEffect(() => {
		dispatch(FetchGroupsFromFirebase());
	}, [dispatch]);

	const onFormSubmit = useCallback(() => {
		clear();
		dispatch(PostGroupThunk({ name: form["name"].value, color: form["color"].value, id: form["name"].value }));
		setaddingGroup(false);
	}, [clear, dispatch, form]);

	groupsRedux.length !== 0 && selectedGroup === "" && setselectedGroup(groupsRedux[0]);
	return (
		<div style={{ marginTop: "10px" }}>
			<Modal show={addingGroup} closeModalFunc={() => setaddingGroup(false)}>
				<Form form={form} title='NUEVO GRUPO' button='Crear Grupo' submit={onFormSubmit} updateValues={updateValues} />
			</Modal>
			{loadingGroup ? (
				<React.Fragment>
					<GroupsNav
						groups={groupsRedux}
						onCLicked={() => setaddingGroup(true)}
						selectGroup={setselectedGroup}
						selectedGroupName={typeof selectedGroup === "string" ? selectedGroup : selectedGroup.name}></GroupsNav>
					{groupsRedux.length !== 0 ? (
						<StudentsTable
							tableColor={typeof selectedGroup === "string" ? "rojo" : selectedGroup.color}></StudentsTable>
					) : (
						<h2>
							no hay grupos <span role='img'> 🤨</span>
						</h2>
					)}
				</React.Fragment>
			) : (
				<Spinner></Spinner>
			)}
		</div>
	);
};

export default Students;
