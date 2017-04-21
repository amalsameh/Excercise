import { Component,OnInit } from '@angular/core';
import {postsService} from './app.posts.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  posts:any;
  constructor(private postsrv:postsService)
  {}
getpostsData()
{
  this.postsrv.getPosts(1).subscribe(data=>this.posts=data,err=>console.log(err));
}
ngOnInit()
{
  this.getpostsData();
}
}
