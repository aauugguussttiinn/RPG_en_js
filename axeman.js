class Axeman extends Character {
  constructor(name, hp = 9, dmg = 3, mana = 25, requiredmana = 40, status, hasplayed) {
      super(hp, dmg, mana, requiredmana, status, hasplayed);
      this.name = name ;
  }

  darkTemptation() {
    this.mana = this.mana - 3 ;
    this.hp = this.hp + 4 ;
    console.log(`${this.name} gains 4 hp`);
  }

}