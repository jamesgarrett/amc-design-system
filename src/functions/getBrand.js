import brands from  '../data/brands.js';

function getBrand(network){
	if (network === 'sundance'){
		let brand = brands.sundance
		return brand }
	if (network === 'ifc'){
		let brand = brands.ifc
		return brand }
	if (network === 'amc'){
		let brand = brands.amc
		return brand }
	if (network === 'wetv'){
		let brand = brands.wetv
		return brand }
	if (network === 'bbca'){
		let brand = brands.bbca
		return brand }
	if (network === 'vanilla'){
		let brand = brands.vanilla
		return brand }
}

export default getBrand
