noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,500);
    canvas.position(560, 127);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet Is Instialized!');
}

function gotPoses(results){
 if(results.length>0)
 {
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("noseX = " + noseX + "noseY= " + noseY);

     leftwristX = results[0].pose.leftWrist.x;
     rightwristX = results[0].pose.rightWrist.x;
     console.log("leftwristX =" + leftwristX + "rightwristX = " + rightwristX);
     
     difference = floor(leftwristX - rightwristX  );
 }
}

function draw(){
    background("#2980B9");
    textSize(difference);
    //document.getElementById("font-manipulator_prjt").innerHTML = "Font size of the text will be = " + difference + "px";
    fill("#FFE787");
    text('Peter', 50, 400);
}


