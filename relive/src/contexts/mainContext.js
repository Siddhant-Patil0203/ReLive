import { proxy } from "valtio";

const states = proxy({
  sliderant: 0,
  count: 10,
});

export default states;