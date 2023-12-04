// import { useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
// import { Progress } from "antd"; // Alternative
import ml5 from "ml5";
import { snapshot, useSnapshot } from "valtio";
import states from "../contexts/mainContext";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Button,
} from "@nextui-org/react";
import { sketch2 } from "./cameraDebug";
import Draggable from "react-draggable";

// Alternative
// const twoColors = {
//   "0%": "#108ee9",
//   "100%": "#87d068",
// };

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let skeleton;
let video;
let poseNet;
let pose;
let brain;
let state = "waiting";
let target = [];
let end = false;
let fullBody = false;

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(windowWidth, windowHeight);

    video = p5.createCapture(p5.VIDEO, () => {
      console.log("camera ready!");
    });

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
    // if (fullBody === true) {
    // console.log(results);
    let x = results[0].value;
    if (x >= 0.9) {
      end = true;
    }
    if (x <= 0.3 && end) {
      states.count -= 1;
      end = false;
    }
    states.sliderant = Math.ceil(x * 100);
    // }
    predictPose();
  }

  function gotPoses(poses) {
    // console.log(poses);

    if (poses.length > 0) {
      pose = poses[0].pose;
      skeleton = poses[0].skeleton;

      if (
        pose.nose.confidence > 0.9 &&
        pose.rightAnkle.confidence > 0.8 &&
        pose.leftAnkle.confidence > 0.8
      ) {
        fullBody = true;
        states.fullbody = true;
      } else {
        fullBody = false;
        states.fullbody = false;
      }

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
    p5.image(video, 0, 0, windowWidth, windowHeight);
    p5.pop();
  };
}

function debugCamera() {
  if (states.debugCamera) states.debugCamera = false;
  else states.debugCamera = true;

  console.log(states.debugCamera);
}

function MainMode() {
  // const [sliderant, setSliderant] = useState(5);
  const snap = useSnapshot(states);

  return (
    <div className="overflow-x-hidden bg-background text-text">
      <div className="absolute pt-5 m-5 text-black right-10">
        {/* Alternative */}
        {/* <Progress
          type="circle"
          percent={snap.sliderant}
          strokeColor={twoColors}
        /> */}

        <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-primary to-accent">
          <CardBody className="items-center justify-center pb-0">
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-3xl font-semibold text-white",
              }}
              value={snap.sliderant}
              strokeWidth={4}
              showValueLabel={true}
            />
          </CardBody>
          <CardFooter className="items-center justify-center pt-0">
            <Chip
              classNames={{
                base: "border-1 border-white/30",
                content: "text-white/90 text-small font-semibold",
              }}
              variant="bordered"
            >
              {snap.count > 0 ? snap.count : "Done!"} Reps Left
            </Chip>
          </CardFooter>
        </Card>

        <Button
          onClick={debugCamera}
          className="p-4 m-4"
          color="primary"
          variant="shadow"
        >
          Camera Debug
        </Button>
      </div>

      {snap.debugCamera && (
        <Draggable>
          <div className="absolute p-2 cursor-move">
            <ReactP5Wrapper sketch={sketch2} />
          </div>
        </Draggable>
      )}
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default MainMode;
