class Tower {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
    this.image = loadImage("assets/tower.png");
    this.width = width;
    this.height = height;
    this.x=x;
    this.y=y;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
  
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
   
  }
}
