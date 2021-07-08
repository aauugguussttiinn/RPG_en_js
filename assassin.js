class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, requiredmana = 20, status, hasplayed) {
      super(hp, dmg, mana, requiredmana, status, hasplayed);
      this.name = name ;
  }

  shadowHit(victim) {
    this.mana = this.mana - 20 ;
  }

}