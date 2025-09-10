import logoCake from '../assets/images/logo-cake.webp';

export default function Navbar() {
	return (
		<nav
			className="navbar navbar-light shadow p-3 d-flex justify-content-center justify-content-md-start"
			style={{ backgroundColor: '#f4e0dc' }}
		>
			<span className="navbar-brand mb-0 ms-0 ms-md-5 h1 d-flex align-items-center justify-content-center justify-content-md-start">
				<img src={logoCake} width="5%" className="me-2" />
				<h1 className="mt-3 font-cake">CRISTINA LARREA</h1>
			</span>
		</nav>
	);
}
