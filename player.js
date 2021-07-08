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
    this.hp = this.hp - attacking.dmg + 2 ;
  }

  dealDamage(victim) {
    victim.hp = victim.hp - this.dmg ;
    if (victim.hp <= 0) {
      this.mana = this.mana + 20
    }
    console.log(`${this.name} deals ${victim.name} ${this.dmg} damages`);
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
    console.log(`${currentPlayer.name} uses magic`);
    switch (currentPlayer.constructor) {
      case Assassin:
        currentPlayer.shadowHit(victim);
        break;
      case Berzerker:
        currentPlayer.Rage();
        break;
      case Fighter:
        currentPlayer.darkVision(victim);
        break;
      case Monk:
        currentPlayer.heal(victim);
        break;
      case Paladin:
        currentPlayer.healingLighting(victim);
        break;
      case Wizard:
        currentPlayer.Fireball(victim);
        break;
      case Axeman:
        currentPlayer.darkTemptation();
        break;
    }
  }

}