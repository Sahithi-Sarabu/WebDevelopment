const words = {
		wordsList:
			`START TREES TREAT STARS TRAPS PARTS 
			 STRAP STARK CARTS SPREE TARPS TARTS 
			 CRASH TRASH SHARP HARPS CRUSH RUSTS
			 RESTS STEER STARE TRACK THESE TRUCK`.split(/\s+/).filter( exists => !!exists)
};

module.exports = words;
