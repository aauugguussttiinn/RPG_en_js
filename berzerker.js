class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, requiredmana = 0, status, hasplayed) {
      super(hp, dmg, mana, requiredmana, status, hasplayed);
      this.name = name ;
  }

  Rage() {
    this.dmg = this.dmg + 1 ;
    this.hp = this.hp - 1 ;
  }

}