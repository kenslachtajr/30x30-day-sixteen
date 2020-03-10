import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Shoe, NotifyService, emptyShoe } from '@ngrx-shoes/core-data';
import { ShoesFacade } from '@ngrx-shoes/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngrx-shoes-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  form: FormGroup;
  selectedShoe: Shoe;
  shoes$: Observable<Shoe[]> = this.shoesFacade.allShoes$;

  constructor(
    private shoesFacade: ShoesFacade,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.shoesFacade.loadShoes();
    this.shoesFacade.mutations$.subscribe(() => this.resetShoe());
  }

  resetShoe() {
    this.form.reset();
    this.selectShoe(emptyShoe);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  selectShoe(shoe: Shoe) {
    this.shoesFacade.selectShoe(shoe.id);
    this.selectedShoe = shoe;
    this.form.patchValue(shoe);
  }

  createShoe() {
    this.notify.notification(`You have created ${this.form.value.title}`);
    this.shoesFacade.createShoe(this.form.value);
  }

  updateShoe() {
    this.notify.notification(`You have updated ${this.form.value.title}`);
    this.shoesFacade.updateShoe(this.form.value);
  }

  saveShoe(shoe: Shoe) {
    if (shoe.id) {
      this.updateShoe();
    } else {
      this.createShoe();
    }
  }

  deleteShoe(shoe: Shoe) {
    this.notify.notification(`You have deleted ${shoe.title}`);
    this.shoesFacade.deleteShoe(shoe);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      coolLevel: null
    });
  }
}
