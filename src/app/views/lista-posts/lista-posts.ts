import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../shared/models/User';
import { CardUser } from '../../components/card-user/card-user';
import { Post } from '../../shared/models/Post';
import { PostService } from '../../services/post-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-posts',
  imports: [RouterLink],
  templateUrl: './lista-posts.html',
  styleUrl: './lista-posts.scss',
})
export class ListaPosts implements OnInit {
private postService = inject(PostService);

private route = inject(ActivatedRoute);

  ngOnInit(): void {
    let idUser = this.route.snapshot.params['id'];
    this.postService.buscarPosts(idUser).subscribe(
      response => this.posts = response
    );

  }

  protected posts: Post[] = [];
  

}
