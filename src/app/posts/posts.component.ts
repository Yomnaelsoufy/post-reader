import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  title: string = 'Posts';
  posts: Post[] = [];
  constructor(private postservice: PostService) {}
  ngOnInit(): void {
    this.posts = this.postservice.getposts();
  }
  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }
}
