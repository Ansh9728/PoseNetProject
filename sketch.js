let capture;
let poseNet;
let noseX,noseY;
let singlePose,skeleton;



function setup() {
  createCanvas(720, 500);
  background(200);
  capture=createCapture(VIDEO)
  capture.hide();
  poseNet=ml5.poseNet(capture,modelLoaded);
  poseNet.on('pose',recivedPoses) //this is event listner if human present it will call a recive posed function


}

function recivedPoses(poses){
  console.log(poses)

  if(poses.length>0){
    singlePose=poses[0].pose;
    //noseX=singlePose.pose.leftEye.x;
    //noseY=singlePose.pose.leftEye.y;
    //to get all the point we have to do
    skeleton=poses[0].skeleton;


  }
  console.log(noseX+ " "+noseY);

}

function modelLoaded(){
  console.log('model loaded');
}

  // it runs in infinite loop and used to all task related to the screen
  function draw() {
    
    image(capture, 0, 0, 700, 500);
    fill(255, 0,0);
    
    if(singlePose){
      for(let i=0;i<singlePose.keypoints.length;i++){
        ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 15,15)
      }

      stroke(255, 255, 255)
      strokeWeight(3)

      for(let j=0;j<skeleton.length;j++){
        line(skeleton[j][0].position.x, skeleton[j][0].position.y,skeleton[j][1].position.x, skeleton[j][1].position.y)


      }


    }
    
  }