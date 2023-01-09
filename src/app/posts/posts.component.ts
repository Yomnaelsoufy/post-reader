import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  title: string = 'Posts';
  posts: Post[] = [];
  constructor() {}
  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'My first post',
        body: 'I am not okey',
        votes: 2,
      },
      {
        id: 2,
        title: 'My second post',
        body: 'I am okey',
        votes: 6,
      },
    ];
  }
}
