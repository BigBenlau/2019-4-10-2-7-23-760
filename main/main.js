module.exports = function main(inputs) {
    price = dist(inputs.distance) + park(inputs.parkTime);
    return Math.round(price);
};

function dist(distance){
	if(distance <= 2){return 6;}
	else if(distance > 2 && distance <= 8){return 6 + 0.8*(distance - 2);}
	else if(distance > 8){return 6 + 4.8 + 0.8*(1 + 0.5)*(distance - 8);}
}

function park(time){
	if (time === 0){return 0;}
	else if(time != 0){return 0.25*time;}
}