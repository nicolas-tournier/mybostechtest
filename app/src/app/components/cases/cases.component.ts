import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HomeService, ICaseListItems } from '../../services/home.service';
import { TableLazyLoadEvent, TablePageEvent, TableRowSelectEvent } from 'primeng/table';

export const numberOfRows = 10;
export const rowsPerPageOptions = [5, 10, 25, 100];

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})

export class CasesComponent {

  casesList$: Observable<ICaseListItems> = this.homeService.caseList$.pipe(
    tap(data => {
      this.totalRecords = data.total;
    }),
    map(data => {
      return {
        total: data.total,
        caseList: data.caseList.map(item => ({
          ...item,
          dateAdded: this.formatDate(item.dateAdded),
          dueDate: this.formatDate(item.dueDate),
          updatedAt: this.formatDate(item.updatedAt)
        }))
      } as ICaseListItems
    })
  );
  loading$: Observable<boolean> = this.homeService.loading$;
  numberOfRows = numberOfRows;
  rowsPerPageOptions = rowsPerPageOptions;
  totalRecords: number;

  tableStyle = {
    'min-width': '20rem',
    'font-weight': 'semi-bold',
    'font-family': 'Rubik, sans-serif',
    'font-size': '14px',
    'color': '#212529'
  }
  constructor(private homeService: HomeService) {
    this.homeService.getCasesList(10, 1);
  }
  onCaseSelected(event: TableRowSelectEvent) {
    console.log('selected ', event);
  }

  onPageChange(event: TablePageEvent) {
    console.log('paged ', event);
  }

  onLoadData(event: TableLazyLoadEvent) {
    this.homeService.getCasesList(this.numberOfRows, (event.first! / event.rows!) + 1);
  }

  private formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = ((date.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'pm' : 'am';
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}${ampm}`;
    return formattedDate;
  }
}
