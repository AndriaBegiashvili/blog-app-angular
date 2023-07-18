import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
BlogService
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.blog = this.blogService.getBlogById(id);
    });
  }
  goToHome(): void{
    this.router.navigate(['/']);
  }
}
