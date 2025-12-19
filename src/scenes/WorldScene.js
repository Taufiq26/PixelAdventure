// src/scenes/WorldScene.js
import Phaser from 'phaser'
import Player from '../entities/Player'

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene')
  }

  create() {
    const map = this.make.tilemap({ key: 'world' })
    const ground_flat = map.addTilesetImage('ground_flat', 'ground_flat')
    const ground_elevation = map.addTilesetImage('ground_elevation', 'ground_elevation')
    const tree = map.addTilesetImage('tree', 'tree')

    const ground_lv1 = map.createLayer('Floor lv1/Ground', ground_flat)
    const ground_lv2 = map.createLayer('Floor lv2/Ground lv2', ground_elevation)
    const walls = map.createLayer('Floor lv1/Walls', ground_flat)
    const deco_tree = map.createLayer('Decorations', tree)

    walls.setCollisionByProperty({ collides: true })
    ground_lv2.setCollisionByProperty({ collides: true })
    deco_tree.setCollisionByProperty({ collides: true })

    const spawn = map.findObject('Objects', o => o.name === 'PlayerSpawn')


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
