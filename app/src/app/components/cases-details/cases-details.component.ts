import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      if (!data) {
        this.router.navigate(['/home/cases']);
      } else {
        this.caseDetailFormGroup.patchValue({
          ...data, dateAdded: formatDate(data.dateAdded, 'dd/MM/yyyy', 'en'), dueDate: formatDate(data.updatedAt, 'dd/MM/yyyy', 'en')
        })
      }
    })
  )

  caseDetailFormGroup: FormGroup;

  constructor(private homeService: HomeService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.caseDetailFormGroup = this.formBuilder.group({
      id: '',
      apartment: '',
      caseNumber: [{ value: '', disabled: true }],
      category: ['', Validators.required],
      contractor: '',
      contractorContact: '',
      createdAt: '',
      dateAdded: ['', Validators.required],
      description: '',
      dueDate: ['', Validators.required],
      jobArea: '',
      notes: '',
      priority: ['', Validators.required],
      reporter: '',
      status: ['', Validators.required],
      subject: '',
      updatedAt: ''
    });
  }
}
