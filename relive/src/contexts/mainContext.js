import { proxy } from "valtio";

const states = proxy({
  sliderant: 5,
  count: 10,
});

export default states;