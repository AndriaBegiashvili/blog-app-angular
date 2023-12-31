import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:'', component: BlogListComponent},
  {path:'add',component: AddBlogComponent},
  {path:'blog/:id',component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
