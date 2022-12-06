import { AUTHROUTES } from 'constants/AuthRoutes'
import { USERROUTES } from 'constants/UserRoutes'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [accessGranted, setAccessGranted] = useState(false)
	const [activeRoute, setActiveRoute] = useState(AUTHROUTES)

	useEffect(() => {
		if (accessGranted) {
			setActiveRoute(USERROUTES)
		} else {
			setActiveRoute(AUTHROUTES)
		}
	}, [accessGranted])

	return (
		<AuthContext.Provider
			value={{ accessGranted, setAccessGranted, activeRoute }}
		>
			{children}
		</AuthContext.Provider>
	)
}
