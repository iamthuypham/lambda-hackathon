let platforms;
let player;

function create() {
    platforms = this.physics.add.staticGroup();
    platforms.create(500, 410, 'street').setScale(2).refreshBody();



    player = this.physics.add.sprite(100, 450, 'batman').setScale(2);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'right',
        frames: [{ key: 'batman', frame: 'batman' }],
        frameRate: 10
    });

    this.anims.create({
        key: 'left',
        frames: [{ key: 'batman', frame: 'batman' }],
        frameRate: 10
    });

    this.physics.add.collider(player, platforms);

}