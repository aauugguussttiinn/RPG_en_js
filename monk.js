class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status) {
      super(hp, dmg, mana, status);
      this.name = name ;
  }

  heal(target) {
    target.hp =target.hp + 8 ;
    this.mana = this.mana - 25 ;
  }

}