// src/scenes/BootScene.js
import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    this.load.image('tiles', 'assets/Terrain/Ground/Tilemap_Flat.png')
    this.load.tilemapTiledJSON('world', 'assets/Maps/world.json')
  }

  create() {
    this.scene.start('WorldScene')
  }
}
