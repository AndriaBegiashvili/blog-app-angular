import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: Blog[] = [{
    id:1,
    author:"john doe",
    blogTitle:"Day 1",
    blogText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    publishDate:"July 6, 20:10:02"
  },
  {
    id:2,
    author:"jane doe",
    blogTitle:"my day",
    blogText:"Lorem Ipsum  ofince the 1500s, when an unknown printer took a galley of ty",
    publishDate:" January 3, 10:20:01"
  }];
  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }

  addBlog(blog: Blog): void {
    this.blogs.unshift(blog);
    console.log(blog);


  }
  getBlogById(id: number): any {
    console.log(this.blogs.find(blog => blog.id == id));
    console.log(this.blogs);

    return this.blogs.find(blog => blog.id == id);
  }

}


