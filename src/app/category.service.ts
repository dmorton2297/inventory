import { Injectable } from '@angular/core';
import categories from '../mocks/categories.js';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: string[];

  constructor() {
    this.categories = categories;
  }
  getCategories = () => {
    return this.categories;
  }

  addCategory = (category) => {
    this.categories.push(category);
  }
}
