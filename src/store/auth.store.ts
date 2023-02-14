import { User } from 'firebase/auth';
import { create } from 'zustand';

interface AuthState {
	isLoading: boolean;
	error: string;
	user: User;
	setLoading: (bool: boolean) => void;
	setError: (err: string) => void;
	setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(set => ({
	isLoading: false,
	error: '',
	user: {} as User,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (err: string) => set(state => ({ ...state, error: err })),
	setUser: (user: User) => set(state => ({ ...state, user: user })),
}));
