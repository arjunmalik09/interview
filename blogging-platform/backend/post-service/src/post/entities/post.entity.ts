import { DatabaseRecord } from '../../../libs/database/src/database.service';

export class Post implements DatabaseRecord {
  id: string;
  createTimeUnix: number;
  updateTimeUnix: number;
  title: string;
  content: string;
  author: string;
  isDeleted: boolean;
  constructor(id, createTimeUnix, updateTimeUnix, title, content, author, isDeleted) {
    this.id = id;
    this.createTimeUnix = createTimeUnix;
    this.updateTimeUnix = updateTimeUnix;
    this.title = title;
    this.content = content;
    this.author = author;
    this.isDeleted = isDeleted;
  }
  toJson() {
    return {
      id: this.id,
      createTimeUnix: this.createTimeUnix,
      updateTimeUnix: this.updateTimeUnix,
      title: this.title,
      content: this.content,
      author: this.author,
      isDeleted: this.isDeleted,
    }
  }
  static fromJson(jsonObj: Record<string, any>) {
    return new Post(
      jsonObj.id,
      jsonObj.createTimeUnix,
      jsonObj.updateTimeUnix,
      jsonObj.title,
      jsonObj.content,
      jsonObj.author,
      jsonObj.isDeleted
    );
  }
}
