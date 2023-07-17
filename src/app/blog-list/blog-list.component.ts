import { Component,OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs:{id:number, blogText: string, author: string, publishDate: string }[] = [];

  constructor(private blogService: BlogService, private router:Router) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  viewBlog(blogId: number): void {
    this.router.navigate(['/blog', blogId]);
  }


}
