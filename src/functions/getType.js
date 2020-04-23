import typeStyles from  '../data/typeStyles.js';

function getType(network){
	if (network === 'sundance'){
		let type = typeStyles.sundance
		return type }
	if (network === 'ifc'){
		let type = typeStyles.ifc
		return type }
	if (network === 'amc'){
		let type = typeStyles.amc
		return type }
	if (network === 'wetv'){
		let type = typeStyles.wetv
		return type }
	if (network === 'bbca'){
		let type = typeStyles.bbca
		return type }
}

export default getType
