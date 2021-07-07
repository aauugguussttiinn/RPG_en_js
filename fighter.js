class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status) {
      super(hp, dmg, mana, status);
      this.name = name ;
  }

  darkVision(victim) {
    this.dmg = 5 ;
    victim.hp = victim.hp - this.dmg ;
    this.dmg = 4 ;
    this.mana = this.mana - 20 ;
  }

}