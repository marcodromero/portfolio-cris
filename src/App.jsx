import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import background from './assets/images/background2.webp';
import bannerTortas from './assets/images/banners/banner-tortas.webp';
import bannerTartas from './assets/images/banners/banner-tartas.webp';
import bannerTortasPersonalizadas from './assets/images/banners/banner-tortas-personalizadas.webp';
import bannerPanificados from './assets/images/banners/banner-panificados.webp';
import bannerBocados from './assets/images/banners/banner-bocados.webp';
import {
	imgBocadosArray,
	imgPanificadosArray,
	imgTortasArray,
	imgTartasArray,
	imgTortasPersonalizadasArray,
} from './utils/data';
import Gallery from './components/Gallery';

function App() {
	return (
		<div className="container-fluid d-flex flex-column p-0">
			<Navbar />
			<section
				className="container-fluid d-flex justify-content-center"
				style={{ backgroundColor: '#a6d6ee' }}
			>
				<Hero />
			</section>
			<section
				className="container-fluid d-flex flex-column pb-5"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="container pt-5 ">
					<Gallery banner={bannerTortas} array={imgTortasArray} />
					<Gallery banner={bannerTartas} array={imgTartasArray} />
					<Gallery banner={bannerBocados} array={imgBocadosArray} />
					<Gallery banner={bannerPanificados} array={imgPanificadosArray} />
					<Gallery
						banner={bannerTortasPersonalizadas}
						array={imgTortasPersonalizadasArray}
						showTitle={false}
					/>
				</div>
			</section>

			<footer className="container-fluid d-flex justify-content-center p-0 ">
				<div
					className="container-fluid d-flex align-items-center justify-content-center"
					style={{ backgroundColor: '#f4e0dc' }}
				>
					<p className="text-center py-3 fs-4 fw-semibold  font-cake m-3 ">
						Sitio Web creado por Marco Romero
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
