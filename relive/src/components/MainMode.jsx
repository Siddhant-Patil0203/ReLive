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

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let skeleton;
let skeleton2;
let video;
let skeletonvideo;
let poseNet;
let poseNetSkeleton;
let pose;
let pose2;
let brain;
let end = false;

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(windowWidth, windowHeight);

    video = p5.createCapture(p5.VIDEO, () => {
      console.log("camera ready!");
    });

    skeletonvideo = p5.createCapture(p5.VIDEO, () => {
      console.log("skeleton camera ready!");
    });
    skeletonvideo.size(windowWidth, windowHeight);

    video.hide();
    skeletonvideo.hide();

    poseNet = ml5.poseNet(video, () => console.log("poseNet ready!"));
    poseNet.on("pose", gotPoses);

    poseNetSkeleton = ml5.poseNet(skeletonvideo, () =>
      console.log("poseNet Skeleton ready!")
    );
    poseNetSkeleton.on("pose", gotPosesSkeleton);

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
        // fullBody = true;
        states.fullbody = true;
      } else {
        // fullBody = false;
        states.fullbody = false;
      }
    }
  }

  function gotPosesSkeleton(poses) {
    // console.log(poses);

    if (poses.length > 0) {
      pose2 = poses[0].pose;
      skeleton2 = poses[0].skeleton;
    }
  }

  p5.draw = () => {
    p5.push();
    p5.image(video, 0, 0, windowWidth, windowHeight);

    if (states.skeletonDebug) {
      if (pose2) {
        for (let i = 0; i < pose2.keypoints.length; i++) {
          if (pose2.keypoints[i].score < 0.5) continue;
          let x = pose2.keypoints[i].position.x;
          let y = pose2.keypoints[i].position.y;
          p5.fill(0, 0, 0);
          p5.ellipse(x, y, 16, 16);
        }

        for (let i = 0; i < skeleton2.length; i++) {
          if (skeleton2[i][0].score < 0.5 || skeleton2[i][1].score < 0.5)
            continue;
          let a = skeleton2[i][0];
          let b = skeleton2[i][1];
          p5.strokeWeight(3);
          p5.stroke(255);
          p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
      }
    }

    p5.pop();
  };
}

function debugCamera() {
  if (states.debugCamera) states.debugCamera = false;
  else states.debugCamera = true;

  console.log(states.debugCamera);
}

function skeletonDebug() {
  if (states.skeletonDebug) states.skeletonDebug = false;
  else states.skeletonDebug = true;

  console.log(states.skeletonDebug);
}

function MainMode() {
  // const [sliderant, setSliderant] = useState(5);
  const snap = useSnapshot(states);

  return (
    <div className="overflow-hidden bg-background text-text">
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

        <div className="flex flex-col">
          <Button
            onClick={debugCamera}
            className="my-2 mx-7"
            color="primary"
            variant="shadow"
          >
            Camera Debug
          </Button>
          <Button
            onClick={skeletonDebug}
            className="my-2 mx-7"
            color="primary"
            variant="shadow"
          >
            Skeleton Debug
          </Button>
        </div>
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
