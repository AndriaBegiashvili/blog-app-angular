import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: {id:number, blogText: string, author: string, publishDate: string }[] = [];
  constructor() { }

  getBlogs(): {id:number, blogText: string, author: string, publishDate: string }[] {
    return this.blogs;
  }

  addBlog(blog: {id:number,blogText: string, author: string, publishDate: string }): void {
    this.blogs.push(blog);
    console.log(blog);


  }
  getBlogById(id: number): any {
    console.log(this.blogs.find(blog => blog.id === id));
    console.log(this.blogs);

    return this.blogs.find(blog => blog.id === id);
  }

}


