var BasicGame = {};

/***************************/
/*******BOOT STATE**********/
/***************************/

BasicGame.Boot = function(){
};

BasicGame.Boot.prototype = {
	init: function(){
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;
		//this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	},
	preload: function(){
		this.load.image('preloaderBackground', 'assets/img/preloader_background.jpg');
        this.load.image('preloaderBar', 'assets/img/preloader_bar.png');
	},
	create: function(){
		this.state.start('Game');
	}
};

/***************************/
/*******GAME STATE**********/
/***************************/

BasicGame.Game = function(){
};

BasicGame.Game.prototype = {
	preload: function(){
		this.load.image('dirt_tile', 'assets/img/dirt_tile3.png');
		this.load.spritesheet('astronaut', 'assets/img/astronaut2.png', 16, 16);
	},
	create: function(){
		this.game.stage.backgroundColor = "#333";
		map = game.add.tilemap();
		map.addTilesetImage('dirt_tile', 'dirt_tile', 16, 16, 0, 0);

		test = map.create('test', 50, 37, 16, 16);
		test.resizeWorld();

		// map.putTile(0, 0, 1, test);
		// for(i = 0; i < 50; i++){
		// 	temp = Math.round(Math.random() * 10);
		// 	map.putTile(temp % 3, i, 15, test);
		// }
		// for(j = 16; j < 30; j++){
		// 	for(i = 0; i < 50; i++){
		// 		temp = Math.round(Math.random() * 10);
		// 		map.putTile((temp % 3) + 3, i, j, test);
		// 	}
		// }
		for(i = 15; i < 37; i++){
			for(j = 0; j < 50; j++){
				temp = Math.round(Math.random() * 10);
				if(temp == 7)
					continue;
				tileup = test.getTiles(j * 16, (i - 1) * 16, 0, 0);
				if(tileup[0].index == -1){
					map.putTile(temp % 3, j, i, test);
				}
				else{
					map.putTile((temp % 3) + 3, j, i, test);
				}
			}
		}
		console.log(test.getTiles(2 * 16, 15 * 16, 0, 0));
		//astron = this.game.add.sprite(16, 14*16, 'astro');
		this.astro = this.game.add.sprite(16, 14*16, 'astronaut');
	}
};