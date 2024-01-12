import { initCounter, incrementCounter, getCounter } from "./model.js";
import { register, setCounter } from "./view.js";

register(() => {
    incrementCounter();
    const counter = getCounter();
    setCounter(counter);
});

initCounter();


