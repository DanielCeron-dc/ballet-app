import React, { Suspense } from "react";
import PrimarySearchAppBar from "./Containers/PrimarySearchAppBar";
import { Switch, Route } from "react-router-dom";

import Spinner from "./Components/UI/Spinner/Spinner";

import "./App.css";

interface Props {
	name: string;
}

const Home = React.lazy(() => {
	return import("./Containers/home/Home");
});

const Receipts = React.lazy(() => {
	return import("./Containers/Receipts/Receipts");
});

const Add = React.lazy(() => {
	return import("./Containers/Add/AddStudent");
});

const Students = React.lazy(() => {
	return import("./Containers/Students/Students");
});

const App: React.FC<Props> = () => {
	return (
		<div className='App'>
			<PrimarySearchAppBar />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route path='/home' render={() => <Home />} />
					<Route path='/add' render={() => <Add />} />
					<Route path='/students' render={() => <Students />} />
					<Route path='/receipts' render={() => <Receipts />} />
				</Suspense>
			</Switch>
		</div>
	);
};

export default App;
