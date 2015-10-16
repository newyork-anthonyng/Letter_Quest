# Letter Quest

This game will follow the quest of an Envelope, as he tries to use his letters to defeat evil and make it home. Use your typing skills to slay monsters and make it to the mailbox.

## User Stories
* As a user, I want to be able to type and get responsive feedback that I'm affecting the game (have juicy effects when a key is pressed).
* As a user, I want to be able to have my skill affect the outcome of the game (have combo bonuses that reward accurate typers).
* As a user, I want to be engrossed in the story (have captivating art assets and a simple, engaging story line).
* As a user, I want to be able to tell the status of my game (have a clear and simple User Interface and HUD).

## Game Mechanics
There are two phases to the game: *walking* and *fighting*.

### Walking
* When walking, letters will scroll by horizontally on the bottom of the screen as the user types.
* Letters will not scroll off the screen until the user types it.
* This phase will serve as a place for users to take a break and build up easy combos to get power ups.
* This phase will have 50 letters for user to type (potential 5 power-ups).

### Fighting
* When fighting, letters will automatically scroll by.
* There will be a *defend* bar. This vertical bar will be shown 1/3 of the screen in from the left side of the screen.
* The user must type the letters before they scroll past the defend bar. Any letters missed will damage the user.
* Any letters typed before the defend bar will count as attacks that damage the enemy.
* Any letters that have scrolled past the defend bar will not be able to be typed. The user must type the letters as they appear, from left to right.
* This phase will have letters that are dependent on the type/difficulty of monster faced.

### Player Attributes and Items
* Attack Strength
* Health
* Potions

### Enemy Attributes and Skills
* Attack Strength
* Health

## To Do List
* ~~Create mechanic for scrolling letters~~
* ~~Create mechanic for registering key strokes~~
* ~~Figure out how to match typed letter against the scrolling letter~~
* Create art assets
    * Player Character
        * Walking
        * Fighting
        * Hurt
    * Background
    * Letter bubble
    * Enemies
    * Heart (HUD)
* Create enemies
