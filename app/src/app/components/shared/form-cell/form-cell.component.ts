import { Component, Input, OnInit } from '@angular/core';

export interface IFormCell {
  label: string;
}

@Component({
  selector: 'app-form-cell',
  templateUrl: './form-cell.component.html',
  styleUrls: ['./form-cell.component.css']
})
export class FormCellComponent implements OnInit {

  @Input() formCellData: IFormCell;

  ngOnInit(): void {

  }
}
