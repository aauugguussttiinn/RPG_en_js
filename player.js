class Character {
  constructor(hp, dmg, mana, requiredmana, name, status = "playing", hasplayed = false) {
      this.hp = hp;
      this.dmg = dmg;
      this.mana = mana;
      this.requiredmana = requiredmana;
      this.name = name;
      this.status = status;
      this.hasplayed = hasplayed;
  }

  takeDamage(attacking) {
    this.hp = this.hp - attacking.dmg ;
  }

  dealDamage(victim) {
    victim.hp = victim.hp - this.dmg ;
    if (victim.hp <= 0) {
      this.mana = this.mana + 20
    }
    console.log(`He deals him ${this.dmg} damages`);
  }

  isDead() {
    if (this.hp <= 0) {
      this.status = "looser" ;
      console.log(`${this.name} is dead`)
      return true
    }
  }

  manaCheckForSuper() {
    if (this.mana >= this.requiredmana) {
      return true ;
    } else {
      return false ;
    }
  }

  usesSuper(currentPlayer, victim) {
    console.log('this line is inside usesSuper');
    console.log(currentPlayer instanceof Assassin);
    switch (currentPlayer) {
      case (currentPlayer instanceof Assassin):
        console.log('assassin');
        currentPlayer.shadowHit(victim);
        break;
      case (currentPlayer instanceof Berzerker):
        console.log('berzerker');
        currentPlayer.Rage();
        break;
      case (currentPlayer instanceof Fighter):
        console.log('fighter');
        currentPlayer.darkVision(victim);
        break;
      case (currentPlayer instanceof Monk):
        console.log('monk');
        currentPlayer.heal(victim);
        break;
      case (currentPlayer instanceof Paladin):
        console.log('paladin');
        currentPlayer.healingLighting(victim);
        break;
      case (currentPlayer instanceof Wizard):
        console.log('wizard');
        currentPlayer.Fireball(victim);
        break;
      case (currentPlayer instanceof Axeman):
        console.log('axeman');
        currentPlayer.darkTemptation();
        break;
    }
  }

}