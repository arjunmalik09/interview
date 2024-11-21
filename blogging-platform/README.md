# blogging-platform
Blogging Platform

## Technical Document
1. API Specification
    1. Create Post: /v1/post/create {
		post: {},
	}: {
		status_code: ,
		post_id: ,
	}
    2. List Post: /v1/post/list {
		post: {},
        page_number: ,
	}: {
		status_code: ,
		posts: ,
		posts_count: ,
		page_number: ,
		total_posts: ,
	}
	3. Update Post: /v1/post/update {
		post: {},
	}: {
		status_code: ,
        post_id:
	}
	4. Delete Post: /v1/post/{post_id}/delete: {
		post: {},
    }
2. Database Type: NoSQL MongoDB
    1. Database layer communicate with database providing agnostic layer
3. Database Schema
    1. Post { id, title, content, author, create_time }
    2. User { id, name, email, permission, create_time }
4. High Level Design
    1. Blog Frontend —> Auth Service —> Post Service —> Database
    2. Blog Frontend: React
    3. Post Service: Node
    4. Database: Mongo
    5. API Document with OpenAPI specifics
5. Auth Service
    1. OAuth Token Based

## Steps for running
1. backend
```
cd backend/post-service
npm ci
npm run start
```
2. frontend
```
cd frontend/blogs
npm ci
npm run start
```
