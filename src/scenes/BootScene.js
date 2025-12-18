// src/scenes/BootScene.js
import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    this.load.image('ground_flat', 'assets/Terrain/Ground/Tilemap_Flat.png')
    this.load.image('ground_elevation', 'assets/Terrain/Ground/Tilemap_Elevation.png')
    this.load.image('tree', 'assets/Resources/Trees/Tree.png')
    this.load.tilemapTiledJSON('world', 'assets/Maps/world.json')
  }

  create() {
    this.scene.start('WorldScene')
  }
}
