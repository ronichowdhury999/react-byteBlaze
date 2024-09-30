import { useLoaderData, useNavigation} from "react-router-dom"
import BlogCard from "../../Components/BlogCard/BlogCard";
import fourOfFourImg from '../../assets/404.jpg'
import Spinner from "../../Components/Spinner/Spinner";


const Blogs = () => {
  const blogs = useLoaderData()
  const useNavigations = useNavigation()

  if(useNavigations.state === 'loading') return <Spinner/>
  return (
    <div>
      <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
            <img src={blogs[0]?.cover_image} alt="img" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 shadow-lg" />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
              {/* new Date().toLocaleDateString()   ata date take right formate phire anar jonnno*/}
              <span className="text-xs text-gray-400">
                {new Date(blogs[0]?.published_at).toLocaleDateString()}
              </span>
              <p>{blogs[0]?.description}</p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {
           blogs?.map(blog => <BlogCard key={blog.id} blog={blog}/>)
           }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs