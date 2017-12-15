import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CategoryService {
  categories: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase){
    this.categories = database.list('categories');
  }

  getCategories(){
    return this.categories;
  }
}
