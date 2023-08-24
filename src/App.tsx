import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
function App() {
	
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {count} = useSelector((state: RootState) => state.counter)


	return (
		<div>
			<div className="flex gap-5 ml-6 mt-10">
				<button className="btn bg-green-400 p-3 rounded-xl">Increment</button>
				<div className="bg-sky-300 p-2 rounded-xl">{count}</div>
				<button className="btn rounded-xl bg-rose-400 p-3">Decrement</button>
			</div>
		</div>
	);
}

export default App;
