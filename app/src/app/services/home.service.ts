import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { LoadCasesData, SetCurrentSelectedCaseId } from 'src/app/store/cases.actions';
import { currentCaseList, currentCaseListItem, isLoading } from 'src/app/store/cases.selectors';

export interface ICaseListItems {
  total: number;
  caseList: ICaseListItem[];
}

export interface ICaseListItem {
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

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  caseList$: Observable<ICaseListItems> = this.store.select(currentCaseList).pipe(
    filter(data => data.caseList.length > 0)
  );

  caseDetail$: Observable<ICaseListItem> = this.store.select(currentCaseListItem);

  loading$: Observable<boolean> = this.store.select(isLoading);

  constructor(private store: Store) { }

  getCasesList(perPage: number, page: number): void {
    this.store.dispatch(LoadCasesData({ payload: { perPage, page } }));
  }

  setCurrentlySelectedCaseId(caseId: string): void {
    console.log('caseid ', caseId);
    this.store.dispatch(SetCurrentSelectedCaseId({ payload: { caseId: caseId } }));
  }
}
