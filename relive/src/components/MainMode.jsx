import { useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { Progress, Slider } from "antd";
import ml5 from "ml5";
import { useSnapshot } from "valtio";
import states from "../contexts/mainContext";

import p5 from "p5";

const twoColors = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let count = 10;
let video;
let poseNet;
let pose;
let skeleton;
let brain;
let state = "waiting";
let target = [];
let slider;
let end = false;

let fullBody = false;
let fullBodyState = "Move Back";

let turnLeft = false;
let turnLeftState = "Turn left";

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(windowWidth, windowHeight);
    // slider = p5.createSlider(0, 1, 0.1, 0.01);

    video = p5.createCapture(p5.VIDEO, () => {
      console.log("camera ready!");
    });
    video.size(windowWidth, windowHeight);
    // console.log(video);
    video.hide();
    poseNet = ml5.poseNet(video, () => console.log("poseNet ready!"));
    poseNet.on("pose", gotPoses);

    let options = {
      inputs: 34,
      outputs: 3,
      task: "regression",
      debug: true,
    };
    brain = ml5.neuralNetwork(options);

    const modelInfo = {
      model: "assets/model/new/model-2.json",
      metadata: "assets/model/new/model_meta-2.json",
      weights: "assets/model/new/model.weights-2.bin",
    };

    brain.load(modelInfo, () => {
      console.log("pose prediction ready!");
      predictPose();
    });
  };

  function predictPose() {
    if (pose) {
      let inputs = [];
      for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        inputs.push(x);
        inputs.push(y);
      }
      brain.predict(inputs, gotResult);
    } else {
      setTimeout(predictPose, 100);
    }
  }

  function gotResult(error, results) {
    let x = results[0].value;
    if (x >= 0.9) {
      end = true;
      // console.log("end = true");
    }
    if (x <= 0.3) {
      if (end) {
        //   console.log("count--");
        //   console.log("end = false");
        count -= 1;
        states.count -= 1;
        end = false;
        // document.getElementById("mmt").innerHTML = "count : " + count;
      }
    }
    // slider.value(x);
    states.sliderant = Math.ceil(x * 100);
    // console.log(states.sliderant);
    predictPose();
  }

  function gotPoses(poses) {
    console.log(poses);
    if (poses.length > 0) {
      pose = poses[0].pose;
      skeleton = poses[0].skeleton;

      // for (let i = 0; i < pose.keypoints.length; i++) {
        if (pose.score > 0.9) {
            fullBody = true;
            fullBodyState = "Great!!";
            states.guide = "Great!!";
        }
        else {
          fullBody = false;
          fullBodyState = "MoveBack";
          states.guide = "MoveBack";
        }
      // }

      if (turnLeft === false) {
        if (pose.leftShoulder.confidence <= 0.6) {
          turnLeft = true;
          turnLeftState = "Done";
        }
      }

      // if (pose.rightAnkle.confidence <= 0.3) {
      //   fullBody = false;
      //   fullBodyState = "MoveBack";
      //   states.guide = "MoveBack";
      // }

      if (state == "collecting") {
        console.log("check: collecting");
        let inputs = [];
        for (let i = 0; i < pose.keypoints.length; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          inputs.push(x);
          inputs.push(y);
        }

        brain.addData(inputs, target);
      }
    }
  }

  p5.draw = () => {
    p5.push();
    // p5.scale(-1, 5);
    // p5.image(video, 0, 0, windowWidth, windowHeight);
    p5.image(video, 0, 0);

    if (pose) {
      for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        p5.fill(0, 0, 0);
        p5.ellipse(x, y, 16, 16);
      }

      for (let i = 0; i < skeleton.length; i++) {
        let a = skeleton[i][0];
        let b = skeleton[i][1];
        p5.strokeWeight(3);
        p5.stroke(255);
        p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
      }
    }
    p5.pop();

    // countText
    // p5.fill(255, 0, 255);
    // p5.noStroke();
    // p5.textSize(256);
    // p5.textAlign(p5.RIGHT, p5.BOTTOM);
    // p5.text(count, p5.width / 2, p5.height / 2);

    // if (fullBody === false) {
      p5.fill(255, 0, 0);
      p5.noStroke();
      p5.textSize(20);
      p5.textAlign(p5.RIGHT, p5.TOP);
      p5.text(fullBodyState, p5.width / 2, p5.height / 2);
    // }

    if (turnLeft === false) {
      p5.fill(255, 255, 0);
      p5.noStroke();
      p5.textSize(20);
      p5.textAlign(p5.LEFT, p5.TOP);
      p5.text(turnLeftState, p5.width / 2, p5.height / 2);
    }
  };
}

function MainMode() {
  // const [sliderant, setSliderant] = useState(5);
  const snap = useSnapshot(states);

  return (
    <div className="overflow-x-hidden bg-background text-text">
      <div className="absolute pt-5 m-5 text-black">
        <Progress
          type="circle"
          percent={snap.sliderant}
          strokeColor={twoColors}
        />

        {snap.count > 0 ? (
          <h1 className="mt-5 text-3xl text-center">{snap.count}</h1>
        ) : (
          <h1 className="mt-5 text-3xl text-center">Done!</h1>
        )}
          

      </div>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default MainMode;
