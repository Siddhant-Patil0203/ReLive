import { ReactP5Wrapper } from "@p5-wrapper/react";
import ml5 from "ml5";
import Lottie from "lottie-react";
import Jump from "../animations/jumps.json";
// import p5 from "p5";
function MainMode() {
  // const [conter, setCounter] = useState(10);

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
      p5.createCanvas(640, 480);
      slider = p5.createSlider(0, 1, 0.1, 0.01);

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
        model: "assets/model/new/model.json",
        metadata: "assets/model/new/model_meta.json",
        weights: "assets/model/new/model.weights.bin",
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
      //   console.log(results[0].value);
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
          end = false;
          document.getElementById("mmt").innerHTML = "count : " + count;
        }
      }
      slider.value(x);
      predictPose();
    }

    function gotPoses(poses) {
      // console.log(poses);
      if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;

        if (fullBody === false) {
          if (pose.rightAnkle.confidence > 0.3) {
            fullBody = true;
            fullBodyState = "Great!!";
          }
        }

        if (turnLeft === false) {
          if (pose.leftShoulder.confidence <= 0.6) {
            turnLeft = true;
            turnLeftState = "Done";
          }
        }

        if (pose.rightAnkle.confidence <= 0.3) {
          fullBody = false;
          fullBodyState = "MoveBack";
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
      //   p5.translate(video.width, 0);
      //   p5.scale(-1, 5);
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

      p5.fill(255, 0, 255);
      p5.noStroke();
      p5.textSize(256);
      p5.textAlign(p5.RIGHT, p5.BOTTOM);
      p5.text(count, p5.width / 2, p5.height / 2);

      if (fullBody === false) {
        p5.fill(255, 0, 0);
        p5.noStroke();
        p5.textSize(20);
        p5.textAlign(p5.RIGHT, p5.TOP);
        p5.text(fullBodyState, p5.width / 2, p5.height / 2);
      }

      if (turnLeft === false) {
        p5.fill(255, 255, 0);
        p5.noStroke();
        p5.textSize(20);
        p5.textAlign(p5.LEFT, p5.TOP);
        p5.text(turnLeftState, p5.width / 2, p5.height / 2);
      }
    };
  }

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log("check");
  //   setCounter(1);
  // }, [counter])

  return (
    <div className="bg-black text-text w-full h-full">
      <ReactP5Wrapper sketch={sketch} />
      <h1 id="mmt" className="m-4 text-2xl text-center">
        count : {count}
      </h1>
      <div>
        <Lottie
          className="w-[640px] h-[480px] mt-10"
          animationData={Jump}
          fill
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
}

export default MainMode;
