class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, requiredmana = 25, status, hasplayed) {
      super(hp, dmg, mana, requiredmana, status, hasplayed);
      this.name = name ;
  }

  heal(target) {
    target.hp = target.hp + 8 ;
    this.mana = this.mana - 25 ;
    console.log(`${this.target.name} gains 9 healthpoints`);
  }

}