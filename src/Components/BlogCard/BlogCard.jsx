import { Link } from "react-router-dom";
import fourOfFourImg from "../../assets/404.jpg";
const BlogCard = ({blog}) => {
    const {id,title,description,cover_image,published_at}=blog;
  return (
    <div>
         <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline group ">
             <div className="transition hover:scale-105 duration-300 border-primary hover:border-secondary border-2 h-96">
             <img className="object-cover w-full rounded h-40" src={cover_image && fourOfFourImg || fourOfFourImg}/>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
              </div>
             </div>
            </Link>
    </div>
  )
}

export default BlogCard