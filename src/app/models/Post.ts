export class Post {
  userId: number;
  title: string;
  body: string;
  votes: number;
  constructor() {
    this.userId = 1;
    this.title = 'title';
    this.body = 'here is the body';
    this.votes = 3;
  }
}
