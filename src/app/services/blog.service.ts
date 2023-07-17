import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: { blogText: string, author: string, publishDate: string }[] = [];

  constructor() { }

  getBlogs(): { blogText: string, author: string, publishDate: string }[] {
    return this.blogs;
  }

  addBlog(blog: { blogText: string, author: string, publishDate: string }): void {
    this.blogs.push(blog);
    console.log(blog);

  }

}
