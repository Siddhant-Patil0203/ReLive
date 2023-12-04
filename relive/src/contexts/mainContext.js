import { proxy } from "valtio";

const states = proxy({
  sliderant: 0,
  count: 10,
  fullbody: false,
  turnleft: false,
  debugCamera: false,
});

export default states;