class Box {
  
    constructor(x,y,w,h) {
    this.x =x;
    this.y = y;
    this.w =w;
    this.h =h;
  }

    //make the color boxes appear on canvas
    appear()
    {
      stroke("white");
      strokeWeight(5);
      fill("black");
      rect(this.x,this.y,this.w,this.h);
    }
}

