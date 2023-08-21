import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HomeService, ICaseListItem } from '../../services/home.service';
import { TableLazyLoadEvent } from 'primeng/table';
import { ActivatedRoute, Router } from '@angular/router';
import { formatTableDate } from 'src/app/utils/dates';
export interface ITableCaseList {
  total: number;
  caseList: ICaseListItem[]
}

export const numberOfRows = 10;
export const rowsPerPageOptions = [5, 10, 25, 100];

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})

export class CasesComponent {

  casesList$: Observable<ITableCaseList> = this.homeService.caseList$.pipe(
    tap(data => {
      this.totalRecords = data.total;
    }),
    map(data => {
      return {
        total: data.total,
        caseList: data.caseList.map(item => ({
          ...item,
          dateAdded: formatTableDate(item.dateAdded),
          dueDate: formatTableDate(item.dueDate),
          updatedAt: formatTableDate(item.updatedAt)
        })).slice(this.currentPage - 1, this.currentPage + this.numberOfRows)
      }
    })
  );
  loading$: Observable<boolean> = this.homeService.loading$;
  numberOfRows = numberOfRows;
  rowsPerPageOptions = rowsPerPageOptions;
  totalRecords: number;
  currentPage: number = 1;

  tableStyle = {
    'min-width': '20rem',
    'font-weight': 'semi-bold',
    'font-family': 'Rubik, sans-serif',
    'font-size': '14px',
    'color': '#212529'
  }
  constructor(private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.homeService.getCasesList(10, 1);

  }
  // theres something wrong with TableRowSelectEvent
  // in that its type epects data to be an array
  // yet the event produces an object literal, so using 'any'
  onCaseSelected(event: any) {
    this.router.navigate([event.data.id], { relativeTo: this.activatedRoute });
    this.homeService.setCurrentlySelectedCaseId(event.data.id);
  }

  onLoadData(event: TableLazyLoadEvent) {
    this.currentPage = (event.first! / event.rows!) + 1;
    this.homeService.getCasesList(this.numberOfRows, (this.currentPage));
  }
}
