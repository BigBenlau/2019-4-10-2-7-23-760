module.exports = function main(inputs) {
    price = dist(inputs.distance) + park(inputs.parkTime);
    return Math.round(price);
};

function dist(distance){
	return 6;
}

function park(time){
	return 1.25;
}