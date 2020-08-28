class Star

{
  constructor()
  {
    this.starX = random(w);
    this.starY = random(h);
    this.starSize = random(8);
    this.strokeSize = random(this.starSize/2);
  }
  
  create()
  {
    colorMode(RGB);
    stroke(255, 255, random(255));
    strokeWeight(this.strokeSize);
    fill(255);
    ellipse(this.starX, this.starY, this.starSize);
  }
  
  move()
  {
    // console.log("coucou " + this.star_x)
    this.starX += random(-10);
    this.starY += random(-10);
    // console.log("J'ai perdu mon étoile")
  }
 
}
