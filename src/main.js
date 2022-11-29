let canvas = document.getElementById('canvas')
let defaultWidthPlane = 50;
let defaultYPlane = 400;
let defaultXPlane = canvas.width/2 - defaultWidthPlane/2
let plane = new Plane(defaultXPlane, defaultYPlane, 70, 70);
plane.draw();


let bullet = new Bullet(300, 400, 10, 20);
bullet.x = (plane.x + plane.width/2) - bullet.width/2;
bullet.y = plane.y - bullet.height;
bullet.draw();

let bullets = [];


function createBullet() {
    for (let i = 0; i < 5; i++) {
        let bullet = new Bullet(300, 400, 20, 30);
        bullet.update(plane.x + plane.width/2 - bullet.width/2, plane.y - bullet.height );
        bullets.push(bullet)
    }
}


function shortBullet() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -= bullets[i].height - 20;
        bullets[i].move();
    }
}

console.log(bullets)

window.addEventListener("mousemove", function (e) {
    let xMouse = e.clientX;
    let yMouse = e.clientY;
    plane.move(xMouse, yMouse)
})



function main() {
    createBullet();
    shortBullet();
    requestAnimationFrame(main)
}

main();


