namespace SpriteKind {
    export const bullet = SpriteKind.create()
    export const fruit = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruit, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 4 4 4 . . . . 
        . . . . 1 1 1 1 1 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    projectile2.setKind(SpriteKind.bullet)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
})
sprites.onOverlap(SpriteKind.bullet, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    create_levels(2)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
})
function create_levels (level: number) {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level2`)
        for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
            mySprite2 = sprites.create(assets.tile`myTile2`, SpriteKind.fruit)
            tiles.placeOnTile(mySprite2, value)
            mySprite2.z = 6
        }
    }
}
let projectile: Sprite = null
let mySprite2: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
create_levels(1)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e . e e . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . . e e e e f . . . . . . . 
    . . . . e e e e e f . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f f f e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . e e e e e e e e . . . . . . 
    . e e . e e . e e . . . . . . . 
    . . . . e e . e e . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
controller.moveSprite(mySprite, 100, 100)
mySprite.ay = 100
scene.cameraFollowSprite(mySprite)
info.setScore(0)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . . 1 . . . 1 . . . . 
        . . . . f f 1 1 f f 5 1 . . . . 
        . . . 5 f f 1 5 f f 5 1 f . . . 
        f f 5 5 f f 1 5 f f 5 1 f f . . 
        f f 5 5 f f 1 5 f f 1 1 f f f . 
        f f 5 5 f f 5 5 f 1 1 5 f f f f 
        f f 5 5 f f 5 5 f f 5 5 f f f . 
        f f 5 5 f f 5 5 f f 5 5 f f . . 
        . . . 5 f f 5 5 f f 5 5 f . . . 
        . . . . f f 5 5 f f 5 5 . . . . 
        . . . . . f . f . f . f . . . . 
        . . . . f f f f f f f f . . . . 
        `, randint(-50, 50), randint(-50, 50))
    projectile.setFlag(SpriteFlag.AutoDestroy, false)
})
