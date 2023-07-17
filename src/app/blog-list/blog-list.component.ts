import { Component,OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs:{ blogText: string, author: string, publishDate: string }[] = [];

  constructor(private blogService: BlogService, private router:Router) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }


}
