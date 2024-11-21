import React from 'react';
import './index.css';
import PostsPage from '../postsPage';

function Dashboard(props: any) {
  return (
    <div className="Dashboard">
      <div className='Dashboard-title'>
        <p>Blogs</p>
      </div>
      <div className='Dashboard-content'>
        <PostsPage />
      </div>
    </div>
  );
}

export default Dashboard;
