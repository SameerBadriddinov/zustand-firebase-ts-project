import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase';
import { useAuthStore } from '../store/auth.store';
import { useNavigate } from 'react-router-dom';

export interface AuthContextState {
	user: User;
	isLoading: boolean;
}

export const AuthContext = createContext<AuthContextState>({
	isLoading: false,
	user: {} as User,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [initialLoader, setInitialLoader] = useState<boolean>(true);
	const { user, isLoading, setUser, setLoading } = useAuthStore();
	const navigate = useNavigate();

	const value = useMemo(
		() => ({
			user,
			isLoading,
		}),
		[user, isLoading]
	);

	useEffect(
		() =>
			onAuthStateChanged(auth, user => {
				if (user) {
					setUser(user);
					navigate('/');
				} else {
					setLoading(true);
					setUser({} as User);
					navigate('/auth');
				}
				setInitialLoader(false);
				setLoading(false);
			}),
		[]
	);

	return <AuthContext.Provider value={value}>{initialLoader ? 'Loading...' : children}</AuthContext.Provider>;
};
