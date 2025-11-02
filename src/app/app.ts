import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  showHeader = false; // Start with false since landing page is default
  showFooter = true; // Footer should show on most pages

  constructor(private router: Router, private location: Location) {
    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderFooterVisibility();
      }
    });
  }

  ngOnInit() {
    // Check initial route multiple ways
    this.updateHeaderFooterVisibility();

    // Double check after a short delay
    setTimeout(() => {
      this.updateHeaderFooterVisibility();
    }, 100);
  }

  private updateHeaderFooterVisibility() {
    const currentPath = this.location.path();
    const routerUrl = this.router.url;

    console.log('Location path:', currentPath);
    console.log('Router URL:', routerUrl);

    // Remove query parameters to get clean path
    const cleanPath = currentPath.split('?')[0];
    const cleanRouterUrl = routerUrl.split('?')[0];

    // Check if we're on the landing page (root route)
    const isLandingPage =
      cleanPath === '' || cleanPath === '/' || cleanRouterUrl === '' || cleanRouterUrl === '/';

    // Header: hide on landing page
    this.showHeader = !isLandingPage;

    // Footer: show on all pages (including landing page)
    this.showFooter = true;

    console.log(
      'Clean path:',
      cleanPath,
      'Clean router URL:',
      cleanRouterUrl,
      'Is Landing Page:',
      isLandingPage,
      'Show Header:',
      this.showHeader,
      'Show Footer:',
      this.showFooter
    );
  }
}
