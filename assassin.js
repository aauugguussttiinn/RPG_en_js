class Assassin extends Character {
  constructor(name, hp = 10, dmg = 6, mana = 20, requiredmana = 20, status, hasplayed) {
      super(hp, dmg, mana, requiredmana, status, hasplayed);
      this.name = name ;
  }

  shadowHit(victim) {
    this.mana = this.mana - 20 ;
    console.log(`He deals him TOCODE damages`);
  }

}