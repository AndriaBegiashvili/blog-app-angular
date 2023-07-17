import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../models/blog.model';
Blog


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit{
  blogText: string = '';
  blogAuthor: string = '';

  showErrors: boolean = false;
  errors: { [key: string]: string } = {};


  constructor(private blogService:BlogService,private router: Router){}

  ngOnInit(): void {
  }

  addBlog(): void{
    this.showErrors = true;
    this.errors = {};

    if (this.blogAuthor.trim() === '') {
      this.errors['author']= 'Please enter the author.';
      return;
    }

    if (this.blogText.trim() === '') {
      this.errors['blogText'] = 'Please enter the blog text.';
      return;
    }
    const blog: Blog = new Blog();
    blog.id = this.generateUniqueId();
    blog.blogText = this.blogText;
    blog.author = this.blogAuthor;
    blog.publishDate = this.getCurrentTime();
    this.blogService.addBlog(blog);
    this.router.navigate(['/']);

  }
  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
  cancelBlog():void{
    this.router.navigate(['/'])
  }


  getCurrentTime(): string {
    const now: Date = new Date();
    const hours: string = this.formatTimeUnit(now.getHours());
    const minutes: string = this.formatTimeUnit(now.getMinutes());
    const seconds: string = this.formatTimeUnit(now.getSeconds());
    const currentMonth:number = now.getMonth();
    const monthNames:string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const month:string = monthNames[currentMonth]


    return `${month} ${currentMonth}, ${hours}:${minutes}:${seconds}`;
  }

  public formatTimeUnit(unit: number): string {
    return unit < 10 ? `0${unit}` : unit.toString();
  }



}
