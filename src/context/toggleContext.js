import React, { createContext, useContext, useState } from "react";

// Context 생성
const ToggleContext = createContext();

// Provider 컴포넌트
export const ToggleProvider = ({ children }) => {
	const [toggle, setToggle] = useState(false);

	const toggleValue = () => {
		setToggle((prevToggle) => !prevToggle);
	};

	return <ToggleContext.Provider value={{ toggle, toggleValue }}>{children}</ToggleContext.Provider>;
};

// Context 사용 훅
export const useToggleContext = () => {
	return useContext(ToggleContext);
};
