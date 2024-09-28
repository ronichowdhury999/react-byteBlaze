import Hero from "../../Components/Hero/Hero"

import wave from '../../assets/wave.svg'
const Home = () => {
  return (
    <div className="md:mt-20 mt-8">
     <Hero/>
     <img className="w-full border-gray-700" src={wave} alt="" />
    </div>
  )
}

export default Home