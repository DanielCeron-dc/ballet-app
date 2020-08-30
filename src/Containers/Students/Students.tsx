import React, { useState, useEffect } from "react";

//* redux
import { FetchGroupsFromFirebase } from "../../store/Group.slice";
import { useTypedSelector } from "../../store";
import { useDispatch } from "react-redux";
import { FetchStudentsThunk, ChangeCheckBoxPendienteThunk } from "../../store/StudentsSlice";

//* Components
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
import ModifyDescription from "./ModifyStudentDescriptionForm/ModifyStudentDescriptionForm";
import editStudentForm from "./EditStudentForm/EditStudentForm";
import EditStudentForm from "./EditStudentForm/EditStudentForm";

interface Props {}

const Students: React.FC<Props> = () => {
	//* Redux store
	const dispatch = useDispatch();
	const groupsRedux: Group[] = useTypedSelector((state) => state.Groups);
	const studentsRedux: IStudent[] = useTypedSelector((state) => state.Students);
	const loadingStudents: boolean = useTypedSelector((state) => state.LoadingStudents);
	const loadingGroup: boolean = useTypedSelector((state) => !state.LoadingGroup);

	//* Forms :D
	const [addingGroup, setaddingGroup] = useState<boolean>(false);
	const [addingStudent, setaddingStudent] = useState<boolean>(false);
    const [modifyingMonthlyPayment, setModifyingMonthlyPayment] = useState<boolean>(false);
    const [modifyingDescription, setmodifyingDescription] = useState<boolean>(false);
    const [editingStudent, seteditingStudent] = useState<boolean>(false);

	const [selectedGroup, setselectedGroup] = useState<string | Group>("there is no selected group");
    const [selectedMonth, setSelectedMonth] = useState<null | ISelectedMonth>(null);
    const [selectedStudent, setselectedStudent] = useState<null | IStudent>(null);
    
    useEffect(() => {
		dispatch(FetchGroupsFromFirebase());
	}, [dispatch]);

	useEffect(() => {
		if (typeof selectedGroup !== "string") {
			dispatch(FetchStudentsThunk(selectedGroup));
		}
    }, [selectedGroup, dispatch]);
    
    useEffect (() => {
        console.log(" selected student " + selectedStudent?.name);
    }, [selectedStudent])

	let openMonthlyPayment = (prmMonth: ISelectedMonth) => {
		setSelectedMonth(prmMonth);
		setModifyingMonthlyPayment(true);
    };
    
    let openDescriptionForm = (student: IStudent) => {
         setselectedStudent(student);
         setmodifyingDescription(true);
    }

    let openEditStudentForm = (student: IStudent) => {
        setselectedStudent(student);
        console.log("selecting " + student); 
        seteditingStudent(true);
    }

	let studentsTable = loadingStudents ? (
		<Spinner />
	) : (
		<StudentsTable
            openEditStudentForm = {openEditStudentForm}
            openDescriptionForm = {openDescriptionForm}
			openMonthlyPayment={openMonthlyPayment}
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
            {/* forms  */}
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
            <Modal show = {modifyingDescription} closeModalFunc = {() => setmodifyingDescription(false)}>
                {selectedStudent && <ModifyDescription key = {selectedStudent.name} studentID = {selectedStudent.id}/>}{/* key to destroy an old component */}
            </Modal>
            <Modal show = {editingStudent} closeModalFunc= {() => seteditingStudent(false)}>
                {selectedStudent && <EditStudentForm key = {selectedStudent.name}
                 closeFormFunction = {() => seteditingStudent(false)}
                student = {selectedStudent}
                  />}
            </Modal>
 
            {/* endForms */}
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
