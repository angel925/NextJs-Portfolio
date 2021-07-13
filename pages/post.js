import Layout from "../components/Layout";
import { useRouter } from "next/router";
import {posts} from '../profile'

const Post = () => {

    const router = useRouter();

    const currentPost = posts.filter((post) => post.title === router.query.title)[0];

    
    return (

        <Layout footer={false} title={router.query.title}>

            <div className="text-center">
                <img 
                src={currentPost.imgURL} 
                alt="" className="img-fluid" 
                style={{width:'50%'}}/>

                <p className="p-4">{currentPost.content}</p>
            </div>
        </Layout>
    );
}

export default Post;