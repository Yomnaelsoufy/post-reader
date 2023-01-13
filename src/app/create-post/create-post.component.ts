import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  title: string = '';
  body: string = '';
  @Output() addPost: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  submitForm(): void {
    const post = {
      title: this.title,
      body: this.body,
      votes: 1,
    };
    this.addPost.emit(post);
    this.title = '';
    this.body = '';
  }
}
