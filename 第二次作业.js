var x = 0;
var y = 0;
var count = 0;

function clearCanvas()  
{  
      var c=document.getElementById("canvas");  
      var cxt=document.getElementById("canvas").getContext("2d");
cxt.clearRect(0,0,c.width,c.height);  
}  

const initMap = () => {
    map = [[0,1,0,1,0,1,0,1,0,0],[0,0,0,0,0,1,0,1,0,0],[0,1,0,0,0,1,1,0,0,1],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0],
           [1,0,0,0,0,0,0,0,0,0],[0,1,1,0,1,0,0,0,0,1],[0,0,0,1,1,1,0,1,0,1],[0,0,0,0,1,0,1,0,0,1],[0,0,1,0,1,0,0,0,0,1]];
    for(let i =0; i < 10; i++)
       for(let j = 0; j < 10; j++){
           map[i][j] = Math.round(Math.random()); 
           if(map[i][j] == 1)
                    count++;
       }
    map[0][0] = 0;
    return map;
    
}

var map;
const draw = () => {
    clearCanvas();
    if(count == 0)
       map = initMap();
    map[y][x] = 0;
    var canvas=document.getElementById("canvas");
		var ctx=canvas.getContext("2d");
		//描绘背景
		var gradient=ctx.createLinearGradient(0,0,0,300);//createLinearGradient() 方法创建线性的渐变对象。
		gradient.addColorStop(0,"#e0e0e0");
		gradient.addColorStop(1,"#ffffff");
		ctx.fillStyle=gradient;
		ctx.fillRect=(0,0,canvas.width,canvas.height);
		//描绘边框
		var grid_cols=10;
		var grid_rows=10;
		var cell_height=canvas.height/grid_rows;
		var cell_width=canvas.width/grid_cols;
		ctx.lineWidth=1;
		ctx.strokeStyle="#a0a0a0";
		//结束边框描绘
		ctx.beginPath();
		//准备画横线
		for(var col=0;col<=grid_cols;col++)
			{
				var xx=col*cell_width;
				ctx.moveTo(xx,0);
				ctx.lineTo(xx,canvas.height);
			}
			//准备画竖线
			for(var row=0;row<=grid_rows;row++)
				{
					var yy=row*cell_height;
					ctx.moveTo(0,yy);
					ctx.lineTo(canvas.width,yy);
                    for(let i = 0; i < 10; i++){
                        if(row < grid_rows && map[row][i] == 1 && (row != y || i != x)){
                            ctx.moveTo(i * cell_height + cell_height/3,yy + cell_height*1.5/3);
                            ctx.lineTo(i * cell_height + cell_height*2/3,yy + cell_height*0.5/3);
                            ctx.moveTo(i * cell_height + cell_height*2/3,yy + cell_height*0.5/3);
                            ctx.lineTo(i * cell_height + cell_height*2/3,yy + cell_height*2.5/3);
                            ctx.lineTo(i * cell_height + cell_height/3,yy + cell_height*1.5/3);
                        }
                    }
				}
				//完成描绘
				
        ctx.moveTo((x + 0.25) * cell_height, (y + 0.25) * cell_height);
        ctx.lineTo((x + 0.25) * cell_height, (y + 0.75) * cell_height);
        ctx.lineTo((x + 0.75) * cell_height, (y + 0.75) * cell_height);
        ctx.lineTo((x + 0.75) * cell_height, (y + 0.25) * cell_height);
        ctx.lineTo((x + 0.25) * cell_height, (y + 0.25) * cell_height);
        ctx.stroke();

}


function w(){
    if(y == 0)
        return;
    else
       y --;
    if(map[y][x] == 1)
    {
        map[y][x] = 0;
        count --;
    }
}

function s(){
    if(y == 9)
        return;
    else
       y ++;
       if(map[y][x] == 1)
    {
        map[y][x] = 0;
        count --;
    }
}

function a(){
    if(x == 0)
        return;
    else
       x --;
    if(map[y][x] == 1)
    {
        map[y][x] = 0;
        count --;
    }
}

function d(){
    if(x == 9)
        return;
    else
       x ++;
    if(map[y][x] == 1)
    {
        map[y][x] = 0;
        count --;
    }
}

