import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoesService } from '@ngrx-shoes/core-data';

@Component({
  selector: 'ngrx-shoes-shoes-item',
  templateUrl: './shoes-item.component.html',
  styleUrls: ['./shoes-item.component.scss']
})
export class ShoesItemComponent implements OnInit {
  _shoe$;
  public get shoe$() {
    return this._shoe$;
  }
  public set shoe$(value) {
    this._shoe$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoeService: ShoesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.shoe$ = this.shoeService.findOne(id);
    });
  }

  goBackToShoes() {
    this.router.navigate(['/shoes']);
  }
}
