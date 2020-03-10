import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoe } from './shoe.model';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  model = 'shoes'

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  findOne(shoe: Shoe) {
    return this.httpClient.get(this.getUrlForId(shoe));
  }

  create(shoe) {
    return this.httpClient.post(this.getUrl(), shoe);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(shoe: Shoe) {
    return this.httpClient.patch(this.getUrlForId(shoe.id), shoe);
  }

  delete(shoe: Shoe) {
    return this.httpClient.delete(this.getUrlForId(shoe.id));
  }
}
