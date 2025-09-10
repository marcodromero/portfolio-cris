import avatar from '../assets/images/avatar.webp';

export default function Hero() {
	return (
		<div
			className="card mb-5 mt-5"
			style={{
				maxWidth: '840px',
				backgroundColor: 'transparent',
				border: 'none',
			}}
		>
			<div className="row g-0">
				<div className="col-md-4">
					<img
						style={{
							width: '100%',
						}}
						src={avatar}
						className="img-fluid rounded-circle border border-5-white"
						alt="..."
					/>
				</div>
				<div className="col-md-8 d-flex align-items-center">
					<div className="card-body ps-0 ps-md-5">
						<h1 className="card-title display-3 fw-semibold text-center text-md-start">
							¡Hola! Soy Cristina, tu amigable Pastelera
						</h1>
						<p className="card-text display-6 text-center text-md-start">
							Bienvenidos a mi delicioso mundo
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
