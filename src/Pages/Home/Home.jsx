import Hero from "../../Components/Hero/Hero"

import wave from '../../assets/wave.svg'
const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-120px)]">
     <Hero/>
     <img className="w-full absolute bottom-0" src={wave} alt="" />
    </div>
  )
}

export default Home