noseX=0;
noseY=0;

difference=0;
right_wristX=0;
left_wristX=0;

function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(550,500);
  canvas.position(560,80);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#808080');
    textSize(difference);
    fill('#FFC0CB');
    stroke('#FFC0CB');
    text('Tamodeep',50,400);
    document.getElementById("text_sides").innerHTML="Width and Hieght of the square will be " + difference + "px";
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results) ;
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("noseX = " + noseX + "noseY = " + noseY);

       left_wristX=results[0].pose.leftWrist.x;
       right_wristX=results[0].pose.rightWrist.x;

       difference= floor(left_wristX - right_wristX) ;
       console.log("leftwrist = " + left_wristX + "rightwrist = " + right_wristX + "difference = " + difference );
    }

}