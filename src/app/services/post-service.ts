import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../shared/models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private http = inject(HttpClient);

  buscarPosts(idUser?: number) {
    if (idUser) {
      return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`);
    }
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  alterarPost(post: Post) {
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }

  buscarPostPorId(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}
