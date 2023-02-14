import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';

const useAuth = () => {
	const { user, setUser, isLoading, setLoading, error, setError } = useAuthStore();
	const navigate = useNavigate();

	const signUp = async (email: string, password: string) => {
		setLoading(true);
		await createUserWithEmailAndPassword(auth, email, password)
			.then(res => {
				navigate('/');
				setUser(res.user);
			})
			.catch(error => {
				const result = error as Error;
				setError(result.message);
			})
			.finally(() => setLoading(false));
	};

	const signIn = async (email: string, password: string) => {
		setLoading(true);
		await signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				navigate('/');
				setUser(res.user);
			})
			.catch(error => {
				const result = error as Error;
				setError(result.message);
			})
			.finally(() => setLoading(false));
	};

	const logout = () => {
		setLoading(true);

		signOut(auth)
			.then(() => {
				setUser({} as User);
				navigate('/auth');
			})
			.catch(err => {
				const result = err as Error;
				setError(result.message);
			})
			.finally(() => setLoading(false));
	};

	return { signIn, signUp, logout, isLoading, error };
};

export default useAuth;
