import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    // nothing to do here for now as this is just
    // a container to allow other components to persist if required
  }
}
