class Form {
    constructor() {
     this.input=createInput("").attribute("placeholder","ENTER YOUR Name")
     this.button=createImg("images/start.png")
     this.titleImg=createImg("images/bg.png")
    }
    Element() {
        this.button.possition(width/2-90,height/2-20);
        this.input.possition(width/2-110,hieght/2-80);
        this.titleImg.possition(120,50);
    }

    replaceImg() {
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
        })
    }
}