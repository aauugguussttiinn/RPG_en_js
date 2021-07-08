class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 50, requiredmana = 40, status, hasplayed) {
      super(hp, dmg, mana, requiredmana, status, hasplayed);
      this.name = name ;
  }

  healingLighting(victim) {
    this.dmg = 4 ;
    victim.hp = victim.hp - this.dmg ;
    console.log(`He deals him ${this.dmg} damages and gains 5 healthpoints`);
    this.dmg = 3 ;
    this.hp = this.hp + 5 ;
    this.mana = this.mana - 40 ;
  }

}