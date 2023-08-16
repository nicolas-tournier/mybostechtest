import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.css']
})
export class CasesDetailsComponent implements OnInit {
  id: string | null
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }
}
