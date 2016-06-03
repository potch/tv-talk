class SimpleGenetics {

  constructor ({el, length, fitness}) {
    this.genes = Array(length).fill(0).map(g => Math.random() * 256 | 0);

    var canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    if (el) {
      el.appendChild(canvas);
    } else {
      document.body.appendChild(canvas);
    }
    this.ctx = canvas.getContext('2d');

    this.fitness = fitness;
    this.bestScore = fitness(this.ctx, this.genes);
  }

  tick () {
    var newGenes = this.genes.slice(0);
    newGenes = newGenes.map(g => Math.min(255, Math.max(0, g + (Math.random() * 20 - 10))) | 0);
    this.ctx.clearRect(0, 0, 256, 256);
    this.ctx.strokeStyle = 'red';
    this.fitness(this.ctx, this.genes);
    this.ctx.strokeStyle = 'blue';
    var score = this.fitness(this.ctx, newGenes);
    if (score > this.bestScore) {
      this.genes = newGenes;
      this.bestScore = score;
    }
  }

}
