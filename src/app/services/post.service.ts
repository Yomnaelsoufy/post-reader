import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}
  getposts() {
    return [
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
        getposts() {
          return [
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
        },
      },
    ];
  }
}
