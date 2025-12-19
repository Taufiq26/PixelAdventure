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
    this.load.spritesheet('Warrior_Blue_front-back', 'assets/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue_front-back.png', { frameWidth: 192, frameHeight: 192 })
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

    this.anims.create({
      key: 'warrior_down',
      frames: this.anims.generateFrameNumbers('Warrior_Blue_front-back', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'warrior_up',
      frames: this.anims.generateFrameNumbers('Warrior_Blue', { start: 36, end: 38 }),
      frameRate: 10,
      repeat: -1
    })

    // Debug: Create animations for all 8 rows
    for (let i = 0; i < 8; i++) {
      this.anims.create({
        key: `warrior_row_${i}`,
        frames: this.anims.generateFrameNumbers('Warrior_Blue', { start: i * 6, end: (i * 6) + 5 }),
        frameRate: 10,
        repeat: -1
      })
    }

    this.scene.start('WorldScene')
  }
}
