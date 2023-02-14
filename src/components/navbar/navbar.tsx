import useAuth from '../../hooks/useAuth';
import { useAuthStore } from '../../store/auth.store';

const Navbar = () => {
	const { logout } = useAuth();
	const { isLoading } = useAuthStore();

	return (
		<div className='container'>
			<div className='d-flex flex-md-row align-items-center pb-3 mb-4 border-bottom' style={{ height: '10vh' }}>
				<img src='https://media.graphassets.com/BldVa3tyRDy2QkoyQq9R' alt='' width='72' height='57' />

				<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
					<button className='btn btn-outline-primary' onClick={logout} disabled={isLoading}>
						{isLoading ? '...' : 'Logout'}
					</button>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
