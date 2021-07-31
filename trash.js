class Trash {
    constructor(x,y,height,width){
        var options ={

            isStatic:true,
            resitution:0,
            friction :1,
            denstiy :0.1


        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;


        World.add(world,this.body);
    }
    

    display(){
        rectMode(CENTER)

        fill(255);

        rect(this.body.position.x, this.body.position.y, this.width,this.height)
    }
}