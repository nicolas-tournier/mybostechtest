import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heading: string;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.heading = this.router.url === '/home/cases' ? 'Cases' : 'Case Item';
    })
  }

  ngOnInit(): void {

  }
}
