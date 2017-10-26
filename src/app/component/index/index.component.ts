import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  public page: any = {
    'menu': [
      {'name': 'Home'},
      {'name': 'About Us', 'active': true},
      {'name': 'Gallery'},
      {'name': 'Reviews'},
      {'name': 'Contacts'},
    ],
    'items': {
      'length': new Array(8),
      'title': 'Title'
    },
    'text': `Water pollution is very serious,  too.  Ugly  rivers  of  dirty water polluted with
      factory waste, poisoned fish are all-round  us.  And  polluted air and poisoned water lead to the end of the
      civilization. So,  nowadays  a lot of dead lands and lifeless areas have appeared. Because our actions  and
      dealings can turn the land to a desert.`
  };
  constructor() { }

  ngOnInit() {
  }

}
