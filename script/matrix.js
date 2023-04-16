const canvas= document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.fillStyle='rgba(0,0,0,1)';
ctx.fillRect(0,0,canvas.width,canvas.height);

class Symbol {
    constructor(x,y, fontSize, canvasHeight){
        this.characters='アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.x=x;
        this.y=y;
        this.fontSize=fontSize;
        this.canvasHeight=canvasHeight;
        this.text='';

    }
    draw(context){
        this.text=this.characters.charAt(Math.random()*this.characters.length);
        context.fillStyle='#0aff0a';
        context.fillText(this.text,this.x*this.fontSize,this.y*this.fontSize);
        if(this.y*this.fontSize>this.canvasHeight && Math.random()>0.99){
            this.y=0;
        }
        else{
            this.y+=1;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth=canvasWidth;
        this.canvasHeight=canvasHeight;
        this.fontSize=20;
        this.columns=this.canvasWidth/this.fontSize;
        this.symbols=[];
        this.#initialize();
        console.log(this.symbols)
    }
    #initialize(){
        for(let i=0;i<this.columns;i++)
        {
            this.symbols[i]=new Symbol(i,0,this.fontSize,this.canvasHeight);
        }

    }
}

const effect=new Effect(canvas.width,canvas.height);

function animate(){
    ctx.font=effect.fontSize + 'px monospace';
    effect.symbols.forEach(symbol =>symbol.draw(ctx));
    ctx.fillStyle='rgba(0,0,0,.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}

animate();
