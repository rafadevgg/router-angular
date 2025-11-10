import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../services/post-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Post } from '../../shared/models/Post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-post',
  imports: [FormsModule, RouterLink],
  templateUrl: './editar-post.html',
  styleUrl: './editar-post.scss',
})
export class EditarPost implements OnInit {

  private postService = inject(PostService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    const idPost = this.route.snapshot.params['id'];
    this.postService.buscarPostPorId(idPost).subscribe(
      response => this.postEdicao = response
    );
  }

  protected postEdicao = new Post()

  salvarPost() {
    this.postService.alterarPost(this.postEdicao).subscribe(
      response => {
        console.log('Post atualizado com sucesso!', response);
        alert('Post atualizado com sucesso!');
      }
    )
    this.router.navigate(['/posts']);
  }
}