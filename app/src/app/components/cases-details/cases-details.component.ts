import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';

export interface ICaseDetail {
  id: string;
  apartment: string;
  caseNumber: string;
  category: string;
  contractor: string;
  contractorContact: string;
  createdAt: string;
  dateAdded: string;
  description: string;
  dueDate: string;
  jobArea: string;
  notes: string;
  priority: string;
  reporter: string;
  status: string;
  subject: string;
  updatedAt: string;
}

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.css']
})
export class CasesDetailsComponent implements OnInit {

  caseDetail$: Observable<ICaseDetail> = this.homeService.caseDetail$.pipe(
    map(data => data as ICaseDetail),
    tap(data => {
      if(!data) {
        this.router.navigate(['/home/cases']);
      }
    })
  )

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {

  }
}
