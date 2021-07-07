class Character {
  constructor(hp, dmg, mana, name, status = "playing") {
      this.hp = hp;
      this.dmg = dmg;
      this.mana = mana;
      this.name = name
      this.status = status
  }

  takeDamage(attacking) {
    this.hp = this.hp - attacking.dmg ;
    if (this.hp <= 0) {
      this.status = "looser" ;
    } 
  }

  dealDamage(victim) {
    victim.hp = victim.hp - this.dmg ;
    if (victim.hp <= 0) {
      this.mana = this.mana + 20
    }
  }

  isDead () {
    this.hp <= 0 ? console.log(true) : console.log(false);
  }

}