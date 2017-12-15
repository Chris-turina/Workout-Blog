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

}
