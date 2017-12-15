import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from '../category.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router'
import { Post } from '../post.model'

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
  providers: [CategoryService]
})
export class CategoryDetailComponent implements OnInit {
  categoryId: string;
  categoryToDisplay;
  postsArr;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private categoryService: CategoryService,
              private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['id'];
    });
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
    this.postsArr = this.categoryService.grabPosts(this.categoryId);
  }

}
