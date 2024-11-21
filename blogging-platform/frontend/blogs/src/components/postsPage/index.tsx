import React, { useEffect, useState } from 'react';
import './index.css';
import Post from '../post';
import queryRunner from '../../query';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    queryRunner.getPosts()
    .then((posts: any) => {
      setPosts(posts)
    })
    .catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return (
    <div className="Posts-page">
      <div className='Posts-content'>
      {
        loading === true ?
        "Loading posts...":
        (
          error !== null ?
          "Error loading posts. Please reload page!":
          posts.map(post => <Post post={post}/>)
        )
      }
      </div>
    </div>
  );
}

export default PostsPage;
