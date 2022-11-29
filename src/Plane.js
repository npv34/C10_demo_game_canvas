class Plane {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        let img = document.getElementById("plane");
        this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }

    move(x, y) {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.x = x;
        this.y = y;
        this.draw();
    }
}
