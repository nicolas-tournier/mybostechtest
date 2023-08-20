import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { LoadCasesData, LoadCasesDataFailure, LoadCasesDataSuccess } from './cases.actions';
import { EndpointService, IApiCaseListItem, IApiCasesList } from '../services/endpoint.service';
import { ICaseListItem } from '../services/home.service';
import { Store } from '@ngrx/store';
import { loadedPages } from './cases.selectors';

@Injectable()
export class CasesDataEffects {

  constructor(
    private actions$: Actions,
    private endpointService: EndpointService,
    private store: Store
  ) {}

  getCaseListData$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LoadCasesData),
        withLatestFrom(this.store.select(loadedPages)),
        switchMap(([action, loadedPagesArray]) => {
          if (loadedPagesArray.includes(action.payload.page)) {
            return of(LoadCasesDataSuccess({ payload: { caseList: [], newPage: action.payload.page } }));
          }

          return this.endpointService.getCasesList(action.payload.perPage, action.payload.page)
            .pipe(
              map((caseListData: IApiCasesList) => {
                const cases = caseListData.data.map((item: IApiCaseListItem) => {
                  return {
                    id: item.id,
                    apartment: item.apartment,
                    caseNumber: item.case_number,
                    category: item.category,
                    contractor: item.contractor,
                    contractorContact: item.contractor_contact,
                    createdAt: item.created_at,
                    dateAdded: item.date_added,
                    description: item.description,
                    dueDate: item.due_date,
                    jobArea: item.job_area,
                    notes: item.notes,
                    priority: item.priority,
                    reporter: item.reporter,
                    status: item.status,
                    subject: item.subject,
                    updatedAt: item.updated_at
                  } as ICaseListItem;
                });
                return LoadCasesDataSuccess({ payload: { caseList: cases, total: caseListData.total, newPage: action.payload.page } });
              }),
              catchError(err => of(LoadCasesDataFailure()))
            );
        })
      );
  });
}
