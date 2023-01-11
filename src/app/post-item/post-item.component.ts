import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() hidePost: EventEmitter<Post> = new EventEmitter();
  constructor() {
    this.post = {
      id: 1,
      title: 'post',
      body: 'body',
      votes: 3,
    };
  }
  ngOnInit(): void {}
  Upvote(post: Post): void {
    post.votes++;
  }
  Downvote(post: Post): void {
    post.votes--;
  }
  hide(post: Post): void {
    this.hidePost.emit(post);
  }
}
