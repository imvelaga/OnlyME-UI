import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NotchComponent } from '../shared/notch/notch.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormsModule, NotchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  postContent: string = '';

  addPhotos() {
    console.log('Add photos clicked');
    // Add file picker logic for photos
  }

  addVideos() {
    console.log('Add videos clicked');
    // Add file picker logic for videos
  }

  sendPost() {
    if (this.postContent.trim()) {
      console.log('Sending post:', this.postContent);
      // Add post submission logic here
      this.postContent = ''; // Clear after posting
    }
  }
}
