import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() selectedCategory;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  beginUpdatingCategory(categoryToUpdate){
    this.categoryService.updateCategory(categoryToUpdate);
  }

  beginDeletingCategory(categoryToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.categoryService.deleteCategory(categoryToDelete);
    }
  }

}
