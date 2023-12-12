import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setCustom,
} from "../redux/state/counter/counterSlice";
import { useRef } from "react";

const Counter = () => {
  const myNumber = useRef();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <h1 className="text-white">Counter App</h1>
      </div>

      <div className="card-body">
        <h4>{count}</h4>

        <div className="my-4">
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success"
          >
            Increse
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-danger mx-2"
          >
            Decrese
          </button>
        </div>

        <div className="my-4">
          <input
            ref={myNumber}
            className="w-50 form-control my-2"
            type="number"
          />
          <button
            onClick={() => dispatch(setCustom(myNumber.current.value))}
            className="btn btn-danger my-2 w-50"
          >
            Set Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
