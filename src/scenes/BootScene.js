// src/scenes/BootScene.js
import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    // nanti load asset di sini
  }

  create() {
    this.scene.start('WorldScene')
  }
}
