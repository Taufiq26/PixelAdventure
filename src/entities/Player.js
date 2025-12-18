// src/entities/Player.js
export default class Player {
  constructor(scene, x, y) {
    this.scene = scene

    this.speed = 120
    this.isLocked = false // nanti dipakai saat attack / skill

    // Create a rectangle graphic instead of null sprite
    this.sprite = scene.physics.add.sprite(x, y, 'player')
    scene.physics.add.existing(this.sprite)

    this.sprite.setCollideWorldBounds(false)
  }

  move(direction) {
    if (this.isLocked) return

    const { x, y } = direction
    this.sprite.body.setVelocity(x * this.speed, y * this.speed)
  }

  stop() {
    this.sprite.body.setVelocity(0, 0)
  }

  get position() {
    return {
      x: this.sprite.x,
      y: this.sprite.y
    }
  }
}
