class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, requiredmana = 25, status, hasplayed) {
      super(hp, dmg, mana, requiredmana, status, hasplayed);
      this.name = name ;
  }

  Fireball(victim) {
    this.dmg = 7 ;
    victim.hp = victim.hp - this.dmg ;
    console.log(`He deals him ${this.dmg} damages`);
    this.dmg = 2 ;
    this.mana = this.mana - 25 ;
  }

}