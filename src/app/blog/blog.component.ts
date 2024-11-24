import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts: any[] = [];

  constructor() {
    // Initialize posts array with sample data, each post has a photo URL
    this.posts = [
      {
        title: 'Joti Jota 2024',
        content: 'Content of Post 1',
        imageUrl: 'assets/images/jota.jpg'
      },
      {
        title: 'JCI day to day activities',
        content: 'Content of Post 2',
        imageUrl: 'assets/images/blog.jpg'
      },
      {
        title: 'Post 3',
        content: 'Content of Post 3',
        imageUrl: 'assets/post3.jpg'
      }
    ];
  }
}
