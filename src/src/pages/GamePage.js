import React from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import background from './assets/Background.jpeg'

const Game = {
  type: Phaser.AUTO,
  width: "100%",
  height: "100%",
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  scene: {
    preload: function() {
      this.load.image('background', background)
    },
    create: function() {
      this.add.image(600, 500, 'background');
      this.helloWorld = this.add.text(
        this.cameras.main.centerX, 
        this.cameras.main.centerY, 
        "DeltaVForce", { 
          font: "30px Arial", 
          fill: "#ffffff",
          align: "center"
        }
      );
      this.helloWorld.setOrigin(0.5);
    },
    update: function() {
      this.helloWorld.rotation += 0.5;
    }
  }
}

const GamePage = () => {
  return (
    <IonPhaser game={Game} />
  )
}

export default GamePage;