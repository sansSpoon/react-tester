import React from 'react';

// create context for the currently logged in user
// token will be populated by Welcome
export const AuthContext = React.createContext({
	authenticated: false,
	authUser: '',
	token: '',
});