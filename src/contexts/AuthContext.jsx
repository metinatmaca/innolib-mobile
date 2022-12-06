import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [accessGranted, setAccessGranted] = useState(false)

	return (
		<AuthContext.Provider value={{ accessGranted, setAccessGranted }}>
			{children}
		</AuthContext.Provider>
	)
}
