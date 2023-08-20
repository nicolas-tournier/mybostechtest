import { createReducer, on } from "@ngrx/store";
import { ICaseListItem } from "../services/home.service";
import { LoadCasesData, LoadCasesDataSuccess } from "./cases.actions";

export interface ICasesState {
  caseList: ICaseListItem[];
  loadedPages: Array<number>;
  total: number;
  isLoading: boolean;
}

const initialState: ICasesState =
{
  caseList: [],
  loadedPages: [],
  total: 0,
  isLoading: false
}
export const casesReducer = createReducer<ICasesState>(
  initialState,
  on(LoadCasesData, (state, action): ICasesState => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(LoadCasesDataSuccess, (state, action): ICasesState => {
    return {
      ...state,
      total: action.payload.total ? action.payload.total : state.total,
      loadedPages: state.loadedPages.includes(action.payload.newPage) ? state.loadedPages : [...state.loadedPages, action.payload.newPage],
      caseList: [...state.caseList, ...action.payload.caseList ],
      isLoading: false
    }
  }),
);
