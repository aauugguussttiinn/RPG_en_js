class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status) {
      super(hp, dmg, mana, status);
      this.name = name ;
  }

  shadowHit(victim) {
    this.mana = this.mana - 20 ;
  }

}