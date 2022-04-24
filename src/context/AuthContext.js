import React from "react";
import { createContext } from "react/cjs/react.production.min";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	return (
		<AuthContext.Provider value="Test Value">{children}</AuthContext.Provider>
	);
};
