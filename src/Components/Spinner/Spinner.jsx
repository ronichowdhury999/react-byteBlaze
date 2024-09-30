import { ScaleLoader } from "react-spinners"

const Spinner = () => {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center">
        <ScaleLoader size={100} color='#F92FD3' />
    </div>
  )
}

export default Spinner