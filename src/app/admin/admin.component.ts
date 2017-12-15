import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [CategoryService]
})
export class AdminComponent implements OnInit {
  // public post: Post[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  submitNewCategory(name: string, description: string, posts: any[]) {
    var newCategory: Category = new Category(name, description, posts);
    this.categoryService.addCategory(newCategory)
  }

}
