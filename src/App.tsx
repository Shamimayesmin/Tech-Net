import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
function App() {
	
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {count} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

	return (
		<div>
			<div className="flex gap-5 ml-6 mt-10">
				<button onClick={()=> dispatch(increment())} className="btn bg-green-400 p-3 rounded-xl">Increment</button>
				<button onClick={()=> dispatch(incrementByAmount(5))} className="btn bg-green-400 p-3 rounded-xl">Increment by value</button>
				<div className="bg-sky-300 p-2 rounded-xl">{count}</div>
				<button onClick={() => dispatch(decrement())} className="btn rounded-xl bg-rose-400 p-3">Decrement</button>
			</div>
		</div>
	);
}

export default App;
