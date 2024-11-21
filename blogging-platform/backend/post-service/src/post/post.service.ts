import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { KeyValueDatabaseService } from './../../libs/database/src/database.service';
import { UtilService } from './../../libs/util/src/util.service';
import { Post } from './entities/post.entity';

const database = new KeyValueDatabaseService();

@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    const id = UtilService.generateUuid();
    const createTimeUnix = UtilService.getUnixTime();
    const updateTimeUnix = UtilService.getUnixTime();
    const post = new Post(
      id,
      createTimeUnix,
      updateTimeUnix,
      createPostDto.title,
      createPostDto.content,
      createPostDto.author,
      false
    );
    database.set(id, post.toJson());
    return post;
  }

  findAll() {
    return database.getSome();
  }

  findOne(id: string) {
    return database.get(id);
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    const postObj = database.get(id);
    const post = Post.fromJson(postObj);
    post.title = updatePostDto.title;
    post.content = updatePostDto.content;
    post.author = updatePostDto.author;
    post.updateTimeUnix = UtilService.getUnixTime();
    database.set(id, post.toJson());
    return post;
  }

  remove(id: string) {
    const postObj = database.get(id);
    const post = Post.fromJson(postObj);
    post.isDeleted = true;
    database.set(post.id, post.toJson());
    return post;
  }
}
