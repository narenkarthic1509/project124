function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,600);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
    }

}

function draw(){
    background("#0033cc");
}