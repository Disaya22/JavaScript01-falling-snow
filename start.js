(()=>{
    function setup(){
        let canvas = document.getElementById('falling-snow-canvas'); //1.
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;//2.

        return {
            canvas,
            canvasContext: canvas.getContext('2d'),
            numberOfSnowBalls: 250
        }
    }

    function random (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createSnowBalls (canvas,numberOfSnowBalls){
        return [...Array(numberOfSnowBalls)].map(()=>{
            return{
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                opacity: random(0.5,0.8),
                radius: random(1,3),
                speedX: random(-5,5),
                speedY: random(-3,3)
            }  
        });  
    }

    function drawSnowBall(canvasContext, snowBall){
        canvasContext.beginPath();
        canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
        canvasContext.fillStyle = `rgba( 255, 234, 0, ${snowBall.opacity} )`;
        canvasContext.fill();
    }

    function moveSnowBall(canvas,snowBall) {
        snowBall.x += snowBall.speedX;
        snowBall.y += snowBall.speedY;

        if(snowBall.x > canvas.width) {
            snowBall.x = 0;
        } else if (snowBall.x < 0){
            snowBall.x = canvas.width;
        }   
        if(snowBall.y > canvas.height){
            snowBall.y = 0;
        }
    }
    function run(){ //จุดเริ่มต้นในการเขียนโค้ด
        let {canvas, canvasContext, numberOfSnowBalls} = setup();
        let snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
        
        
        setInterval(()=>{
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
            snowBalls.forEach((snowBall) => moveSnowBall(canvas,snowBall));
        },50) //50 milliseccond
    }
    run();
})(); 
