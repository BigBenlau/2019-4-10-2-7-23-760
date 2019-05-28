module.exports = function main(inputs) {
    price = dist(inputs.distance) + park(inputs.parkTime);
    return Math.round(price);
};
function dist(distance){
	return 6 + 0.8*Math.max(Math.min(distance, 8) - 2, 0) + 0.8*(1 + 0.5)*Math.max(distance - 8, 0);
}
function park(time){
	return 0.25*time;
}