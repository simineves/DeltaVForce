import Phaser from "phaser"


class MainScene extends Phaser.Scene {
  preload() {
    this.load.spritesheet("tiles", "assets/hospitalTiles.png", {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.tilemapTiledJSON("hospitalMap", "assets/testJSON.json")
    this.load.spritesheet("player", "assets/player.png", {
      frameWidth: 16,
      frameHeight: 32
    })
  }

  create() {

    // const hospitalMap = this.make.tilemap({key: "hospitalMap"})
    // const hospitalTileset = this.hospitalMap.addTilesetImage("hospitalTiles", "tiles")
    // const belowLayer = this.hospitalMap.createStaticLayer("Below", hospitalTileset, 0, 0)
    // const aboveLayer = this.hospitalMap.createStaticLayer("Above", hospitalTileset, 0, 0)
    // const hospitalLayer = this.hospitalMap.createStaticLayer("Hospital", hospitalTileset, 0, 0)

    // this.make.tilemap({key: "hospitalMap"})
    // this.hospitalMap.addTilesetImage("hospitalTiles", "tiles")
    // this.hospitalMap.createStaticLayer("Below", this.hospitalTileset, 0, 0)
    // this.hospitalMap.createStaticLayer("Above", this.hospitalTileset, 0, 0)
    // this.hospitalMap.createStaticLayer("Hospital", this.hospitalTileset, 0, 0)

    this.map = this.make.tilemap({key: "hospitalMap"})
    this.tileset = this.map.addTilesetImage("hospitalMap", "tiles")
    console.log(this.tileset)
    this.layer = this.map.createStaticLayer("Tile Layer 1", this.tileset)

    this.player = this.physics.add.sprite(500, 500, "player")
    this.player.setCollideWorldBounds(true)

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", { start: 6, end: 11 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 12, end: 17 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", { start: 18, end: 23 }),
      frameRate: 10,
      repeat: -1
    })
  }

  update() {
    this.cursors = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE
    })

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160)
      this.player.anims.play("left", true)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160)
      this.player.anims.play("right", true)
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160)
      this.player.anims.play("up", true)
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160)
      this.player.anims.play("down", true)
    } else if (this.cursors.space.isDown) {
      this.player.setVelocity(0)
    }
  }
}

export const config = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: MainScene
}
