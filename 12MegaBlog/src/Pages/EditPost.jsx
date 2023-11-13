import React, { useState, useEffect } from 'react';
import { Container, PostCard, PostForm } from '../components';
import appwriteService from '../appwrite/configer'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost(props) {
    const [posts, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((posts) => {
                if (posts) {
                    setPosts(posts)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    return posts ? (
        <div className='py-8'>
            <Container>
                <PostForm post={posts} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;