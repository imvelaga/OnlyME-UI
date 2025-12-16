import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notch',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './notch.component.html',
  styleUrl: './notch.component.css',
})
export class NotchComponent {
  searchQuery: string = '';
  
  messageCount: number = Math.floor(Math.random() * 20) + 1;
  notificationCount: number = Math.floor(Math.random() * 50) + 1;
  friendRequestCount: number = Math.floor(Math.random() * 15) + 1;

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Search query:', this.searchQuery);
      // Add search logic here
    }
  }

  openMessages() {
    console.log('Opening messages');
    // Add navigation or modal logic
  }

  openNotifications() {
    console.log('Opening notifications');
    // Add navigation or modal logic
  }

  openFriendRequests() {
    console.log('Opening friend requests');
    // Add navigation or modal logic
  }
}
