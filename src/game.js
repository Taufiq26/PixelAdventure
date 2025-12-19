// src/game.js
import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import WorldScene from './scenes/WorldScene'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1e1e1e',
  pixelArt: true,

  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },

  scene: [BootScene, WorldScene]
}

export default new Phaser.Game(config)
