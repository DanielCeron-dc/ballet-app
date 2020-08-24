import React, { useState, useEffect, useCallback } from "react";

import { FetchGroupsFromFirebase } from "../../store/Group.slice";
import { useTypedSelector } from "../../store";
import { useDispatch } from "react-redux";
import { FetchStudentsThunk, ChangeCheckBoxPendienteThunk } from "../../store/StudentsSlice";

import Modal from "../../Components/UI/Modal/Modal";
import StudentsTable from "../../Components/StudentsTable/studentsTable";
import IconButton from "../../Components/UI/IconButton/IconButton";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupsNav from "../../Components/GroupNav/GroupsNav";
import Spinner from "../../Components/UI/Spinner/Spinner";

//* interfaces
import Group from "../../interfaces/Group";
import IStudent from "../../interfaces/student";
import ISelectedMonth from "../../interfaces/selectedMonth";

//* Forms
import AddGroupForm from "./AddGroupForm/AddGroupForm";
import AddStudentForm from "./AddStudentForm/AddStudentForm";
import ModifyMonthlyPayment from "./ModifyMonthlyPayment/ModifyMonthlyPayment";

interface Props {}

const Students: React.FC<Props> = () => {
	//* Redux things
	const dispatch = useDispatch();
	const groupsRedux: Group[] = useTypedSelector((state) => state.Groups);
	const studentsRedux: IStudent[] = useTypedSelector((state) => state.Students);
	const loadingStudents: boolean = useTypedSelector((state) => state.LoadingStudents);
	const loadingGroup: boolean = useTypedSelector((state) => !state.LoadingGroup);

	//* Form things :D
	const [addingGroup, setaddingGroup] = useState<boolean>(false);
	const [addingStudent, setaddingStudent] = useState<boolean>(false);
	const [modifyingMonthlyPayment, setModifyingMonthlyPayment] = useState<boolean>(false);

	const [selectedGroup, setselectedGroup] = useState<string | Group>("there is no selected group");
	const [selectedMonth, setSelectedMonth] = useState<null | ISelectedMonth>(null);

	useEffect(() => {
		dispatch(FetchGroupsFromFirebase());
	}, [dispatch]);

	useEffect(() => {
		if (typeof selectedGroup !== "string") {
			dispatch(FetchStudentsThunk(selectedGroup));
		}
	}, [selectedGroup, dispatch]);

	let openMonthlyPament = (prmMonth: ISelectedMonth) => {
		setSelectedMonth(prmMonth);
		setModifyingMonthlyPayment(true);
	};

	let studentsTable = loadingStudents ? (
		<Spinner></Spinner>
	) : (
		<StudentsTable
			openMonthlyPayment={openMonthlyPament}
			changePendienteState={(student: IStudent, PendienteKey: string) =>
				dispatch(ChangeCheckBoxPendienteThunk(student, PendienteKey))
			}
			students={studentsRedux}
			selectedGroup={selectedGroup}
			tableColor={typeof selectedGroup === "string" ? "rojo" : selectedGroup.color}></StudentsTable>
	);

	groupsRedux.length !== 0 && selectedGroup === "there is no selected group" && setselectedGroup(groupsRedux[0]);
	return (
		<div style={{ marginTop: "10px" }}>
			<Modal show={addingGroup} closeModalFunc={() => setaddingGroup(false)}>
				<AddGroupForm closeFormFunction={() => setaddingGroup(false)} />
			</Modal>
			<Modal show={addingStudent} closeModalFunc={() => setaddingStudent(false)}>
				<AddStudentForm closeFormFunction={() => setaddingStudent(false)} selectedGroup={selectedGroup} />
			</Modal>
			<Modal show={modifyingMonthlyPayment} closeModalFunc={() => setModifyingMonthlyPayment(false)}>
				{selectedMonth && (
					<ModifyMonthlyPayment
						closeFormFunction={() => setModifyingMonthlyPayment(false)}
						selectedMonth={selectedMonth}
					/>
				)}
			</Modal>
			{loadingGroup ? (
				<React.Fragment>
					<GroupsNav //*OPTIMIZED
						groups={groupsRedux}
						onCLicked={() => setaddingGroup(true)}
						selectGroup={setselectedGroup}
						selectedGroupName={typeof selectedGroup === "string" ? selectedGroup : selectedGroup.name}></GroupsNav>
					{groupsRedux.length !== 0 ? (
						<React.Fragment>
							{studentsTable}
							<div style={{ marginTop: 45, textAlign: "right", marginRight: "10%" }}>
								<IconButton displayHoverElement={false} tooltipColor='red' onClick={() => setaddingStudent(true)}>
									<PersonAddIcon />
								</IconButton>
							</div>
						</React.Fragment>
					) : (
						<h2>
							no hay grupos
							<span role='img' aria-label='carita :u'>
								🤨
							</span>
						</h2>
					)}
				</React.Fragment>
			) : (
				<Spinner></Spinner>
			)}
		</div>
	);
};

export default React.memo(Students);
