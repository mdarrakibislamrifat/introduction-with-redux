import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/features/counterSlice';




function App() {

  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counter)

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md p-10 bg-slate-200">
        <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">Increment</button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">Decrement</button>
      </div>
    </div>
  )
}

export default App
