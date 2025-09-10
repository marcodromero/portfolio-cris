import Card from './Card';

export default function Gallery({ banner, array, showTitle = true }) {
	return (
		<div className="mt-5">
			<div>
				<img src={banner} height={'27px'} className="text-center" />
			</div>
			<div className="d-flex mt-4 row">
				{array.map((urlImage, i) => (
					<div
						className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
						key={i}
					>
						<Card urlImage={urlImage} showTitle={showTitle} />
					</div>
				))}
			</div>
		</div>
	);
}
