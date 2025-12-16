import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);

  // Sample profiles with placeholder images
  profiles = [
    { name: 'Model 1', image: 'https://i.pravatar.cc/150?img=1', status: 'online' },
    { name: 'Model 2', image: 'https://i.pravatar.cc/150?img=2', status: 'online' },
    { name: 'Model 3', image: 'https://i.pravatar.cc/150?img=3', status: 'online' },
    { name: 'Model 4', image: 'https://i.pravatar.cc/150?img=4', status: 'online' },
    { name: 'Model 5', image: 'https://i.pravatar.cc/150?img=5', status: 'online' },
    { name: 'Model 6', image: 'https://i.pravatar.cc/150?img=6', status: 'online' },
    { name: 'Model 7', image: 'https://i.pravatar.cc/150?img=7', status: 'online' },
    { name: 'Model 8', image: 'https://i.pravatar.cc/150?img=8', status: 'online' },
    { name: 'Model 9', image: 'https://i.pravatar.cc/150?img=9', status: 'online' },
    { name: 'Model 10', image: 'https://i.pravatar.cc/150?img=10', status: 'away' },
    { name: 'Model 11', image: 'https://i.pravatar.cc/150?img=11', status: 'away' },
    { name: 'Model 12', image: 'https://i.pravatar.cc/150?img=12', status: 'away' },
    { name: 'Model 13', image: 'https://i.pravatar.cc/150?img=13', status: 'away' },
    { name: 'Model 14', image: 'https://i.pravatar.cc/150?img=14', status: 'away' },
    { name: 'Model 15', image: 'https://i.pravatar.cc/150?img=15', status: 'offline' },
    { name: 'Model 16', image: 'https://i.pravatar.cc/150?img=16', status: 'offline' },
    { name: 'Model 17', image: 'https://i.pravatar.cc/150?img=17', status: 'offline' },
    { name: 'Model 18', image: 'https://i.pravatar.cc/150?img=18', status: 'offline' },
    { name: 'Model 19', image: 'https://i.pravatar.cc/150?img=19', status: 'offline' },
    { name: 'Model 20', image: 'https://i.pravatar.cc/150?img=20', status: 'offline' },
  ];

  totalProfiles = 25;
  hasMoreProfiles = true;
  remainingProfiles = this.totalProfiles - this.profiles.length;

  loadMoreProfiles() {
    const currentLength = this.profiles.length;
    const loadCount = Math.min(5, this.remainingProfiles);

    for (let i = 0; i < loadCount; i++) {
      const profileNum = currentLength + i + 1;
      let status: 'online' | 'away' | 'offline';

      if (profileNum <= 9) {
        status = 'online';
      } else if (profileNum <= 14) {
        status = 'away';
      } else {
        status = 'offline';
      }

      this.profiles.push({
        name: `Model ${profileNum}`,
        image: `https://i.pravatar.cc/150?img=${profileNum}`,
        status: status,
      });
    }

    this.remainingProfiles = this.totalProfiles - this.profiles.length;
    this.hasMoreProfiles = this.remainingProfiles > 0;
  }

  onSearch() {
    console.log('Search clicked');
    // Add your search logic here
  }

  onLogout() {
    console.log('User logged out');
    // Add your logout logic here
    // For example: this.authService.logout();
    // this.router.navigate(['/']);
  }
}
