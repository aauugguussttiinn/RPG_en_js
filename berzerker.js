class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status) {
      super(hp, dmg, mana, status);
      this.name = name ;
  }

  Rage() {
    this.dmg = this.dmg + 1 ;
    this.hp = this.hp - 1 ;
  }

}