import React, { useState } from 'react';
import displayLogo from './displayLogo.png';
import './index.css';

interface PostType {
  title: string;
  content: string;
  author: string;
}

function Post(props: any) {
  const post: PostType = props.post;
  const [displayContent, setDisplayContent] = useState(false);
  return (
    <div className="Post">
      <div className='Post-title'>
        <p>{post.title}</p>
        <button className='Display-content' onClick={() => setDisplayContent(true)}>
        Display <img src={displayLogo} className="Post-display-content-logo" alt="display-content-logo" />
        </button>
      </div>
      <p hidden={displayContent} className="Post-content">{post.content}</p>
    </div>
  );
}

export default Post;
