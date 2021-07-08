class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, requiredmana = 20, status, hasplayed, useddarkVision = false) {
      super(hp, dmg, mana, requiredmana, status, hasplayed);
      this.name = name ;
      this.useddarkVision = useddarkVision;
  }

  darkVision(victim) {
    this.dmg = 5 ;
    victim.hp = victim.hp - this.dmg ;
    console.log(`${this.name} deals ${victim.name} ${this.dmg} damages`);
    this.dmg = 4 ;
    this.mana = this.mana - 20 ;
    this.useddarkVision = true ;
  }

}