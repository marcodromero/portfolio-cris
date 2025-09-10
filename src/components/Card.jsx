export default function Card({ urlImage, showTitle }) {
	const item5 = urlImage.split('/')[5];
	const badNameImagen = item5.split('.')[0];
	let nameImagen = badNameImagen
		.replaceAll('%20', ' ')
		.replaceAll('%C3%B3', 'ó')
		.replaceAll('%C3%A9', 'é')
		.replaceAll('%C3%B1', 'ñ');

	return (
		<div className="card mb-4" style={{ width: '200px' }}>
			<img
				src={urlImage}
				className="card-img-top"
				style={{ height: '150px', Width: '100%', objectFit: 'cover' }}
				alt="..."
			/>
			{showTitle ? (
				<div className="card-body">
					<h5 className="card-title">{nameImagen}</h5>
				</div>
			) : null}
		</div>
	);
}
