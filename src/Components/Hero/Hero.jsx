import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Welcome to <span className="font-bold bg-gradient-to-r from-primary via-blue-400 to-secondary text-transparent bg-clip-text animate-gradient">Byteblaze</span></h1>
                        <p className="py-6">
                            ByteBlaze is the bridge betwen the complex world of techonology and the curious minds egar to understant it
                        </p>
                        <div className="flex items-center gap-4 justify-center">
                           
                            <Link to='/blogs' className="relative px-5 py-2 font-medium text-white group">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-secondary group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-primary group-hover:bg-secondary group-hover:-skew-x-12"></span>
                                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                                <span className="relative">Read blogs</span>
                            </Link>
                            <Link to='/bookmarks' className="relative px-5 py-2 font-medium text-white group">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-secondary group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-primary group-hover:bg-secondary group-hover:-skew-x-12"></span>
                                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                                <span className="relative">Read bookmarks</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero