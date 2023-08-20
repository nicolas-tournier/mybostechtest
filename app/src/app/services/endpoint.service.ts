import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enivornments/environment';
import { catchError, EMPTY, map, Observable } from 'rxjs';
export interface IApiCaseListItem {
  apartment: string;
  case_number: string;
  category: string;
  contractor: string;
  contractor_contact: string;
  created_at: string;
  date_added: string;
  description: string;
  due_date: string;
  id: string;
  job_area: string;
  notes: string;
  priority: string;
  reporter: string;
  status: string;
  subject: string;
  updated_at: string;
}

export interface IApiCasesList {
  total: number;
  data: IApiCaseListItem[];
}

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  casesListUrl = '/cases';
  caseUrl = '/case';

  constructor(private http: HttpClient) { }

  getCasesList(perPage: number, pageNumber: number): Observable<IApiCasesList> {
    const url = environment.serverUrl + this.casesListUrl + `?per_page=${perPage}&page=${pageNumber}`;
    return this.http.get<IApiCasesList>(url, this.buildOptions(true)).pipe(
      map((response: any) => ({ data: response.data, total: response.total })),
      catchError(this.handleError)
    );
  }

  getCaseDetails(caseNumber: number): Observable<any> {
    const url = environment.serverUrl + this.casesListUrl + `/${caseNumber}`;
    return this.http.get<any>(url, this.buildOptions(true)).pipe(
      catchError(this.handleError),
      map(data => data as any)
    );
  }

  private buildOptions(auth: boolean, queryParams?: any) {
    const headers: any = {
      "Content-Type": "application/json",
    };
    if (auth) {
      headers["Authorization"] =
        "Bearer " + "";
    }
    const options: any = {
      headers: new HttpHeaders(headers),
    };
    if (queryParams) {
      options["params"] = queryParams;
    }
    return options;
  }
  private handleError(err: any) {
    return EMPTY;
  }
}
