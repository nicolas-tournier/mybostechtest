import { createAction, props } from '@ngrx/store';
import { ICaseListItem } from '../services/home.service';

export const LoadCasesData = createAction(
  '[LoadCasesData] Load Cases Data',
  props<{ payload: { perPage: number, page: number } }>()
);

export const LoadCasesDataSuccess = createAction(
  '[LoadCasesDataSuccess] Load Cases Data Success',
  props<{ payload: { caseList: ICaseListItem[], total?: number, newPage: number } }>()
);

export const LoadCasesDataFailure = createAction(
  '[LoadCasesDataFailure] Load Cases Data Failure'
);

export const SetCurrentSelectedCaseId = createAction(
  '[SetCurrentSelectedCaseId] Set Current Selected CaseId',
  props<{ payload: { caseId: string } }>()
);
