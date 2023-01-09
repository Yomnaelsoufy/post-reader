export class Post {
  id: number;
  title: string;
  body: string;
  votes: number;
  constructor() {
    this.id = 1;
    this.title = 'title';
    this.body = 'here is the body';
    this.votes = 3;
  }
}
