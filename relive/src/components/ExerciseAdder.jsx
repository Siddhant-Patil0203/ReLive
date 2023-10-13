import { ReactP5Wrapper } from "@p5-wrapper/react";
import ml5 from "ml5";

let video;
let poseNet;
let pose;
let skeleton;
let brain;
let state = "waiting";
let target = [];
let slider;

function sketch(p5) {

  function trainModel() {
    brain.normalizeData();
    let options = {
      epochs: 50,
    };
    brain.train(options, () => {
      console.log("model trained");
      brain.save();
    });
  }
  
  p5.setup = () => {
    p5.createCanvas(640, 480);
    
    slider = p5.createSlider(0, 1, 0.5, 0.01);
    video = p5.createCapture(p5.VIDEO);
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

    // const modelInfo = {
    //   model: "assets/model/model.json",
    //   metadata: "assets/model/model_meta.json",
    //   weights: "assets/model/model.weights.bin",
    // };

    // brain.load(modelInfo, () => {
    //   console.log("pose prediction ready!");
    //   predictPose();
    // });
    
    brain.loadData('assets/new/dataset.json', trainModel);
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
    // console.log(results);
    let x = results[0].value;
    slider.value(x);
    predictPose();
  }

  p5.keyPressed = () => {
    if (p5.key == "s") {
      brain.saveData("dataset");
    } else if (p5.key == "t") {
      trainModel();
    } else if (p5.key == "d") {
      target = [slider.value(), slider.value()];

      console.log(target);

      setTimeout(function () {
        console.log("collecting");
        state = "collecting";

        setTimeout(function () {
          console.log("not collecting");
          state = "waiting";
        }, 5000);
      }, 5000);
    }
  };

  function gotPoses(poses) {
    // console.log(poses);
    if (poses.length > 0) {
      pose = poses[0].pose;
      skeleton = poses[0].skeleton;

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
  };
}

function ExerciseAdder() {
  return (
    <div className="">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default ExerciseAdder;
