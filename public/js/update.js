function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    } else if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
}