import ml5 from "ml5";

export function sketch2(p5) {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let skeleton;
  let video;
  let poseNet;
  let pose;

  p5.setup = () => {
    p5.createCanvas(windowWidth / 4, windowHeight / 4);

    video = p5.createCapture(p5.VIDEO, () => {
      console.log("camera ready!");
    });

    video.size(windowWidth / 4, windowHeight / 4);

    video.hide();
    poseNet = ml5.poseNet(video, () => console.log("poseNet ready!"));
    poseNet.on("pose", gotPoses);
  };

  function gotPoses(poses) {
    // console.log(poses);

    if (poses.length > 0) {
      pose = poses[0].pose;
      skeleton = poses[0].skeleton;
    }
  }

  p5.draw = () => {
    p5.push();

    p5.image(video, 0, 0, windowWidth / 4, windowHeight / 4);
    if (pose) {
      for (let i = 0; i < pose.keypoints.length; i++) {
        if (pose.keypoints[i].score < 0.5) continue;
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        p5.fill(0, 0, 0);
        p5.ellipse(x, y, 16, 16);
      }

      for (let i = 0; i < skeleton.length; i++) {
        if (skeleton[i][0].score < 0.5 || skeleton[i][1].score < 0.5) continue;
        let a = skeleton[i][0];
        let b = skeleton[i][1];
        p5.strokeWeight(3);
        p5.stroke(255);
        p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
      }
    }
    p5.pop();
  };
}
