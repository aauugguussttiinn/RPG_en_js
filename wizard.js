class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, status) {
      super(hp, dmg, mana, status);
      this.name = name ;
  }

  Fireball(victim) {
    this.dmg = 7 ;
    victim.hp = victim.hp - this.dmg ;
    this.dmg = 2 ;
    this.mana = this.mana - 25 ;
  }

}