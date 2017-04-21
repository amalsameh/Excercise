import { Pipe, PipeTransform,Input } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class PostspipePipe implements PipeTransform {
@Input() searchtext:string;
  transform(value: any, args?: any): string[] {
return args?value.filter((post:any)=>post.title.toLocaleLowerCase().indexOf(args)!=-1):value
  }

}
