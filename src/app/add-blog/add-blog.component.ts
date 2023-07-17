import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit{
  blogText: string = '';
  blogAuthor: string = '';
  publishDate: Date = new Date();
  currentMonth:number = this.publishDate.getMonth()
  currentHour: string = this.publishDate.getHours().toString()
  currentMinute: string = this.publishDate.getMinutes().toString()
  monthNames:string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  month:string = this.monthNames[this.currentMonth]

  constructor(private blogService:BlogService,private router: Router){}

  ngOnInit(): void {
  }

  addBlog(): void{

    const blog = {
      blogText: this.blogText,
      author: this.blogAuthor,
      publishDate: this.month+" "+this.currentMonth+", "+this.currentHour+":"+this.currentMinute
    };
    this.blogService.addBlog(blog);
    this.router.navigate(['/']);

  }

}
