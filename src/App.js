import React from "react";
import { useMediaQuery } from "react-responsive";
import { ToggleProvider } from "./context/toggleContext";
import PcRouter from "./routes/pcRoute";
import MRouter from "./routes/mRoute";

export const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({
		query: "(max-width:768px)",
	});
	return <>{isMobile && children}</>;
};

export const Pc = ({ children }) => {
	const isPc = useMediaQuery({
		query: "(min-width:769px)",
	});
	return <>{isPc && children}</>;
};

function App() {
	return (
		<ToggleProvider>
			<>
				<Mobile>
					<MRouter />
				</Mobile>
				<Pc>
					<PcRouter />
				</Pc>
			</>
		</ToggleProvider>
	);
}

export default App;
