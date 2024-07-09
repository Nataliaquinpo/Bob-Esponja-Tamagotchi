class Tamagochi {
    constructor() {
        this.hunger = 5;
        this.happiness = 10;
        this.energy = 10;
        this.dirty = 10;
        this.sleep = 10;
        this.sad = 10;
        this.health = 10;
        this.alive = true;
        this.updateStatus();
        this.bindActions();
        this.start();
    }

    updateStatus() {
        document.getElementById('Hunger').innerText = this.hunger;
        document.getElementById('Happiness').innerText = this.happiness;
        document.getElementById('Energy').innerText = this.energy;
        document.getElementById('Dirty').innerText = this.dirty;
        document.getElementById('Sleep').innerText = this.sleep;
        document.getElementById('Sad').innerText = this.sad;
        document.getElementById('health').innerText = this.health;
        this.updateImage();
    }

    updateImage() {
        const image = document.getElementById('Bob_Esponja');
        if (this.health <= 0) {
            image.src = 'Imagenes Tamagotchi/Triste.png';
        } else if (this.happiness >= 7) {
            image.src = 'Imagenes Tamagotchi/Feliz.png';
        } else if (this.hunger >= 7) {
            image.src = 'Imagenes Tamagotchi/Hambre.png';
        } else if (this.energy < 3) {
            image.src = 'Imagenes Tamagotchi/Cansado.png';
        } else if (this.dirty < 2) {
            image.src = 'Imagenes Tamagotchi/Sucio.png';
        } else if (this.sleep < 1) {
            image.src = 'Imagenes Tamagotchi/Sueño.png';
        } else if (this.sad < 1) {
            image.src = 'Imagenes Tamagotchi/Triste.png';
        } else {
            image.src = 'Imagenes Tamagotchi/Bob_Esponja.png';
        }
    }

    feed() {
        if (this.energy > 0 && this.alive) {
            this.hunger = Math.max(this.hunger - 1, 0);
            this.happiness = Math.min(this.happiness + 1, 10);
            this.dirty = Math.min(this.dirty + 2, 10);
            this.sleep = Math.min(this.sleep + 1, 10);
            this.sad = Math.min(this.sad + 1, 10);
            this.energy--;
            document.getElementById('Bob_Esponja').src = 'Imagenes Tamagotchi/Comiendo.png';
            setTimeout(() => this.updateStatus(), 1000);
        }
    }

    play() {
        if (this.energy > 0 && this.alive) {
            this.happiness = Math.min(this.happiness + 1, 10);
            this.energy--;
            document.getElementById('Bob_Esponja').src = 'Imagenes Tamagotchi/Jugando.png';
            setTimeout(() => this.updateStatus(), 1000);
        }
    }

    sleep() {
        if (this.energy < 10 && this.alive) {
            this.energy++;
            this.happiness = Math.max(this.happiness - 1, 0);
            document.getElementById('Bob_Esponja').src = 'Imagenes Tamagotchi/Dormido.png';
            setTimeout(() => this.updateStatus(), 1000);
        }
    }

    study() {
        if (this.energy > 0 && this.alive) {
            this.energy--;
            this.happiness = Math.max(this.happiness - 1, 0);
            document.getElementById('Bob_Esponja').src = 'Imagenes Tamagotchi/Estudiando.png';
            setTimeout(() => this.updateStatus(), 1000);
        }
    }

    bath() {
        if (this.energy > 0 && this.alive) {
            this.energy--;
            this.dirty = Math.max(this.dirty - 5, 0);
            document.getElementById('Bob_Esponja').src = 'Imagenes Tamagotchi/Bañandose.png';
            setTimeout(() => this.updateStatus(), 1000);
        }
    }

    bindActions() {
        document.getElementById('Feed').addEventListener('click', () => this.feed());
        document.getElementById('Play').addEventListener('click', () => this.play());
        document.getElementById('Sleep').addEventListener('click', () => this.sleep());
        document.getElementById('Study').addEventListener('click', () => this.study());
        document.getElementById('Bath').addEventListener('click', () => this.bath());
    }

    start() {
        this.interval = setInterval(() => {
            if (!this.alive) return;
            this.hunger = Math.min(this.hunger + 1, 10);
            this.happiness = Math.max(this.happiness - 1, 0);
            this.health = Math.max(this.health - 1, 0);
            if (this.hunger >= 10 || this.happiness <= 0 || this.health <= 0) {
                this.alive = false;
                clearInterval(this.interval);
                alert('¡Tu Tamagochi ha muerto!');
            }
            this.updateStatus();
        }, 3000);
    }
}

window.onload = () => {
    new Tamagochi();
};

