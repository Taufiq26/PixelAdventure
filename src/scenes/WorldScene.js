// src/scenes/WorldScene.js
import Phaser from 'phaser'
import Player from '../entities/Player'

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene')
  }

  create() {
    const map = this.make.tilemap({ key: 'world' })
    const tileset = map.addTilesetImage('ground_flat', 'tiles')

    const ground = map.createLayer('Ground', tileset)
    const walls = map.createLayer('Walls', tileset)

    walls.setCollisionByProperty({ collides: true })

    const spawn = map.findObject('Objects', o => o.name === 'PlayerSpawn')
    const g = this.add.graphics()
    g.fillStyle(0x00ff88, 1)
    g.fillRect(0, 0, 16, 16)
    g.generateTexture('player', 16, 16)
    g.destroy()

    this.player = new Player(this, spawn.x, spawn.y)
    this.physics.add.collider(this.player.sprite, walls)

    this.cameras.main.setBounds(
      0,
      0,
      map.widthInPixels,
      map.heightInPixels
    )
    this.cameras.main.startFollow(this.player.sprite)

    this.cursors = this.input.keyboard.createCursorKeys()
    this.keys = this.input.keyboard.addKeys('W,A,S,D')
  }

  update() {
    const direction = { x: 0, y: 0 }

    if (this.cursors.left.isDown || this.keys.A.isDown) direction.x = -1
    if (this.cursors.right.isDown || this.keys.D.isDown) direction.x = 1
    if (this.cursors.up.isDown || this.keys.W.isDown) direction.y = -1
    if (this.cursors.down.isDown || this.keys.S.isDown) direction.y = 1

    // Normalize diagonal movement BEFORE calling move()
    if (direction.x !== 0 && direction.y !== 0) {
      direction.x *= Math.SQRT1_2
      direction.y *= Math.SQRT1_2
    }

    if (direction.x === 0 && direction.y === 0) {
      this.player.stop()
    } else {
      this.player.move(direction)
    }

    this.player.update?.()
  }
}
