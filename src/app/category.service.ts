import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from './post.model';

@Injectable()
export class CategoryService {
  categories: FirebaseListObservable<any[]>;
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase){
    this.categories = database.list('categories');
  }

  getCategories(){
    return this.categories;
  }

  addCategory(newCategory: Category){
    this.categories.push(newCategory);
  }

  getCategoryById(categoryId: string){
    return this.database.object('categories/' + categoryId);
  }

  updateCategory(localUpdatedCategory){
    var categoryEntryInFirebase = this.getCategoryById(localUpdatedCategory.$key);
    categoryEntryInFirebase.update({name: localUpdatedCategory.name, description: localUpdatedCategory.description})
  }

  deleteCategory(categoryToDelete){
    var categoryEntryInFirebase = this.getCategoryById(categoryToDelete.$key);
    categoryEntryInFirebase.remove();
  }

  grabPosts(categoryId:string){
    this.posts = this.database.list('categories/'+categoryId+'/post/');
    return this.posts;
  }

  addNewPost(newPost){
    // this.grabPosts(categoryId);
  }

}
