import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';

@Injectable()
export class postsService
{
URL:string="http://jsonplaceholder.typicode.com/posts?userId=";
constructor(public http:Http){
}
getPosts(id:number):Observable<any>
{
return this.http.get(this.URL+id);
}
}