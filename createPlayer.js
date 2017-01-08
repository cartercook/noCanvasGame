function createPlayer(xPos, yPos) {
	Crafty.load({
	    "sprites": {
	        // This spritesheet has 8 images, in a 1 by 8 grid
	        "player.png": {
	            // This is the width of each image in pixels
	            tile: 25,
	            // The height of each image
	            tileh: 25,
	            // We give names to individual images
	            map: {
	            	player_stand: [0, 0]
	            }
	        }
	    }
	},
	function() {
		var player = Crafty.e('2D, Canvas, Twoway, Gravity, player_stand, SpriteAnimation')
		.attr({x: xPos, y: yPos, w: 25, h: 25})
		.twoway(150)
		.gravity('Floor')
		.reel("player_stand", 1000, [[0, 0]])
	    .reel("player_jump", 1000, [[1, 0]])
		.reel("player_walk", 500, [
			[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]
		])
		.animate("player_walk", -1)
		.bind('MotionChange', function(change) {
			if(this.vx === 0) {
				this.reel('player_stand');
			} else {
				this.animate('player_walk', -1);
			}
		});
	});
}