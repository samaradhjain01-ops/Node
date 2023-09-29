import { Component, OnInit } from '@angular/core';
import { myJson } from '../response';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  ngOnInit(): void {}

  preferences: any = [];

  constructor() {
    // const items = JSON.parse(this.res);
    console.log(myJson);
    this.preferences = myJson.subcategory;
    console.log(this.preferences);
  }
  //   this.getJSON().subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }

  // public getJSON(): Observable<any> {
  //   return this.http.get('./assets/response.json');
  // }

  click(index: any) {
    let item = this.preferences[index];
    if (item.isExpand) {
      item.isExpand = false;
      this.collapseDataSource(item, item.id);
    } else {
      this.updateDataSource(index);
    }
  }

  updateDataSource(index: any) {
    let item = this.preferences[index];
    const parent = item.id;
    if (item.subcategory.length > 0) {
      let subcategory = item.subcategory;
      let level = item.level + 1;
      subcategory.forEach((item: any) => {
        item.level = level;
        item.isExpand = false;
        item.parent = parent;
      });
      if (item.isExpand) {
        item.isExpand = false;
        this.preferences[index] = item;
        this.preferences = this.preferences.filter(function (el: any) {
          return !subcategory.includes(el);
        });
      } else {
        item.isExpand = true;
        this.preferences[index] = item;
        this.preferences.splice.apply(
          this.preferences,
          [index + 1, 0].concat(subcategory)
        );
      }
    }
  }

  collapseDataSource(item: any, superparent: any) {
    const parent = item.id;
    if (item.subcategory.length > 0) {
      let subcategory = item.subcategory;
      if (subcategory.length > 0) {
        subcategory.forEach((item: any) => {
          this.collapseDataSource(item, superparent);
        });
        this.preferences = this.preferences.filter(function (el: any) {
          if (!el.parent) {
            return true;
          } else {
            return el.parent != parent;
          }
        });
      } else {
        this.preferences = this.preferences.filter(function (el: any) {
          if (!el.parent) {
            return true;
          } else {
            return el.parent != parent;
          }
        });
      }
    }
  }

  editPrefence(item: any) {}

  deleteRow(item: any) {}
}
