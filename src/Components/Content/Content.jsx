import { useLoaderData } from "react-router-dom";
import fourOfFourImg from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { title,cover_image,tags,body_html} = blog;
    return (
            <div className="mx-auto group  hover:no-underline focus:no-underline group ">
                <div className="border border-gray-500">
                    <img className="object-cover w-full rounded h-40" src={cover_image && fourOfFourImg || fourOfFourImg} />
                    <div className="flex flex-wrap p-6 gap-2 border-t border-dashed border-gray-400">
                        {tags?.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{tag}</a>)}

                    </div>
                    <div className="p-6 space-y-2">
                        <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <h3>{title}</h3>
                        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                    </div>
                </div>
            </div>
    )
}

export default Content