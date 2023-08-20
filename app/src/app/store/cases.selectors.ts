import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICasesState } from './cases.reducer';

const caseListState = createFeatureSelector<ICasesState>('cases');

export const currentCaseList = createSelector(
  caseListState,
  state => ({ caseList: state.caseList, total: state.total })
);

export const isLoading = createSelector(
  caseListState,
  state => state.isLoading
);

export const loadedPages = createSelector(
  caseListState,
  state => state.loadedPages
);
