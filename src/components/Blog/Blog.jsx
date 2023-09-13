
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog}) => {
    const {title, cover, author_img, author, posted_date, reading_time,hashtags,}=blog
    return (
        
        <div className="mb-20">
            <img className="w-full mb-8" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-6 pt-4">
                        <img className="w-14" src={author_img} alt="" />
                        <div>
                            <h3 className="text-2xl">{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                      
                </div>
                <div>
                        <span>{reading_time} min read</span>
                        <button className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
                
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash} </a></span>)
                }
            </p>
            
        </div>
    );
};



export default Blog;