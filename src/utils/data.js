const imgBocados = import.meta.glob('../assets/images/bocados/*', {
	eager: true,
});
export const imgBocadosArray = Object.values(imgBocados).map(
	(module) => module.default
);

const imgPanificados = import.meta.glob('../assets/images/panificados/*', {
	eager: true,
});
export const imgPanificadosArray = Object.values(imgPanificados).map(
	(module) => module.default
);

const imgTortas = import.meta.glob('../assets/images/tortas/*', {
	eager: true,
});
export const imgTortasArray = Object.values(imgTortas).map(
	(module) => module.default
);

const imgTartas = import.meta.glob('../assets/images/tartas/*', {
	eager: true,
});
export const imgTartasArray = Object.values(imgTartas).map(
	(module) => module.default
);

const imgTortasPersonalizadas = import.meta.glob(
	'../assets/images/tortas_personalizadas/*',
	{
		eager: true,
	}
);
export const imgTortasPersonalizadasArray = Object.values(
	imgTortasPersonalizadas
).map((module) => module.default);
