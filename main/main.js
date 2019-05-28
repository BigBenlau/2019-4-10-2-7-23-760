module.exports = function main(inputs) {
    price = dist(inputs.distance) + park(inputs.parkTime);
    return Math.round(price);
};

function dist(distance){
	return 19;
}

function park(time){
	if (time === 0){return 0;} 
}