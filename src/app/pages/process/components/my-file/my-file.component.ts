import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-file',
  templateUrl: './my-file.component.html',
  styleUrls: ['./my-file.component.scss']
})
export class MyFileComponent implements OnInit {

  Data = [
    {
      id: 1,
      isroot: 1,
      isNode: 'Coner',
      label: '直属上级'
    },
    {
      id: 2,
      isroot: 2,
      isNode: 'Coner',
      label: '财务会计',
      children: [
        {
          id: 4,
          isroot: 2,
          isNode: 'left',
          label: '财务总监'
        },
        {
          id: 5,
          isroot: 2,
          isNode: 'right',
          label: '财务总监2'
        }
      ]
    },
    {
      id: 3,
      isNode: 'Coner',
      label: '财务出纳'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
