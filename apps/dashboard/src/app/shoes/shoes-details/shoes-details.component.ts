import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shoe } from '@ngrx-shoes/core-data';

@Component({
  selector: 'ngrx-shoes-shoes-details',
  templateUrl: './shoes-details.component.html',
  styleUrls: ['./shoes-details.component.scss']
})
export class ShoesDetailsComponent {
  currentShoe: Shoe;
  originalTitle;
  @Input() set shoe(value) {
    if (value) this.originalTitle = value.title;
    this.currentShoe = Object.assign({}, value);
  }

  @Input() form;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
