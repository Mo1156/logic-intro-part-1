function gameOver () {
    gameOver()
}
function _49ers () {
    _49Ers = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 . . . . . . . . . . 5 . 
. 5 . 2 . . 2 . . 2 2 2 2 . 5 . 
. 5 . 2 . . 2 . . 2 . . 2 . 5 . 
. 5 . 2 . . 2 . . 2 . . 2 . 5 . 
. 5 . 2 . . 2 . . 2 2 2 2 . 5 . 
. 5 . 2 2 2 2 . . . . . 2 . 5 . 
. 5 . . . . 2 . . . . . 2 . 5 . 
. 5 . . . . 2 . . 2 . . 2 . 5 . 
. 5 . . . . 2 . . 2 2 2 2 . 5 . 
. 5 . . . . . . . . . . 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    _49Ers.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenWidth()))
    extra_velocity = 0
    if (Math.percentChance(20)) {
        extra_velocity = Math.randomRange(0, 50)
    } else {
        extra_velocity = Math.randomRange(-16, 16)
    }
    _49Ers.x += 0 - 5 * (info.score() - extra_velocity)
    if (info.score() <= 20) {
        controller.moveSprite(spaceship, 100 - (2 - info.score()), 100 - (2 - info.score()))
    }
}
function change_Score () {
    change_Score()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let extra_velocity = 0
let _49Ers: Sprite = null
let spaceship: Sprite = null
spaceship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 2 2 4 4 4 4 4 4 4 2 2 . . . 
. 2 2 4 2 2 2 2 2 2 2 4 2 2 . . 
`, SpriteKind.Player)
controller.moveSprite(spaceship)
spaceship.x = 8
spaceship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
// for the 49ers
game.onUpdateInterval(2000, function () {
    _49ers()
})
// score board 
game.onUpdateInterval(2000, function () {
    info.changeScoreBy(1)
})
