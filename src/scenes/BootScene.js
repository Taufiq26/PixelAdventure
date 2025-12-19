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
    this.load.spritesheet('Warrior_Blue', 'assets/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png', { frameWidth: 192, frameHeight: 192 })
  }

  create() {
    this.anims.create({
      key: 'warrior_idle',
      frames: this.anims.generateFrameNumbers('Warrior_Blue', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'warrior_run',
      frames: this.anims.generateFrameNumbers('Warrior_Blue', { start: 6, end: 11 }),
      frameRate: 10,
      repeat: -1
    })

    this.scene.start('WorldScene')
  }
}
