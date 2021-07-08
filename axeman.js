class Axeman extends Character {
  constructor(name, hp = 9, dmg = 3, mana = 3, status, hasplayed) {
      super(hp, dmg, mana, status, hasplayed);
      this.name = name ;
  }

  darkTemptation(victim) {
    this.mana = this.mana - 3 ;
    this.hp = this.hp + 4 ;
  }

}