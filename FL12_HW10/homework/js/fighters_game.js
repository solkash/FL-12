class Fighter {

    constructor(object) {
        this.object = object;
        this.health = object.hp;
        this.damage = object.damage;
        this.strength = object.strength;
        this.agility = object.agility;
        this.name = object.name;
    }

    getName() {
        return this.object.name;
    }

    getDamage() {
        return this.object.damage;
    }

    getStrength() {
        return this.object.strength;
    }

    getAgility() {
        return this.object.agility;
    }

    getHealth() {
        return this.object.health;
    }

    attack(fighter) {
        const chance = fighter.getStrength() + fighter.getAgility();
        const maxChance = 100;
        const total = Math.floor(Math.random() * maxChance);
        if (total <= chance) {
            fighter.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} to ${fighter.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    logCombatHistory() {
        return `Name: ${this.getName()}, Wins: ${this.getWin()}, Losses: ${this.getLosses()}`;
    }

    heal(income) {
        if (this.getHealth() + income > this.getHealth()) {
            this.object.health = 100;
        } else {
            this.object.health = this.object.health + income;
        }
    }

    dealDamage(income) {
        let currentHp = this.health - income;
        if (currentHp < 0) {
            currentHp = 0;
        }
        this.health = currentHp;
    }

    addWin() {
        console.log(`${this.getName()} won!`);
        this.win;
    }

    addLoss() {
        this.losse;
    }

    getWin() {
        return this.win;
    }

    getLoss() {
        return this.loss;
    }
}

function battle(Fighter1,Fighter2) {
    if (Fighter1.getHealth() === 0 || Fighter2.getHealth() === 0) {
        console.log('One of fighters is dead. The battle cannot take place')
    } else {
        for (;;) {
            Fighter1.attack(Fighter2);
            if (Fighter1.getHealth() <= 0) {
                Fighter1.addLoss();
                Fighter1.addWin();
                console.log(Fighter1.getName() + ' has won ');
                break;
            }
            Fighter2.attack(Fighter1);
            if (Fighter2.getHealth() <= 0) {
                Fighter2.addLoss();
                Fighter1.addWin();
                console.log(Fighter1.getName() + ' has won ');
                break;
            }
        }
    }
}