import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {postsService} from './app.posts.service';
import {postsComponent} from './app.mypost.component';
import { PostspipePipe } from './postspipe.pipe';
import {IPost} from './app.Posts';

@NgModule({
  declarations: [
    AppComponent,
    postsComponent,
    PostspipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [postsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
