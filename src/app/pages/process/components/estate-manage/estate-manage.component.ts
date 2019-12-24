import { Component, OnInit } from '@angular/core';
import { IndexService } from './service';
import { CoolLocalStorage } from 'src/app/common';
import { NzTreeNode, NzFormatEmitEvent } from 'ng-zorro-antd';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-estate-manage',
  templateUrl: './estate-manage.component.html',
  styleUrls: ['./estate-manage.component.scss']
})
export class EstateManageComponent implements OnInit {
  public nzTrees: any;
  activedNode: NzTreeNode;

  public seachForm: FormGroup;

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      type: 1
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      type: 0
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      type: 0
    }
  ];

  constructor(
    private localStorage: CoolLocalStorage,
    private service: IndexService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.cityLocal();
  }

  initForm() {
    this.seachForm = this.fb.group({
      taskNumber: '',
      feedbackName: ''
    });
  }

  cityLocal() {
    const city = this.localStorage.getObject('city');
    const tree = [
      {
        title: '全部城市',
        key: 0,
        children: this.service.formateCity(city)
      }
    ];

    this.nzTrees = tree;
    console.log(this.nzTrees);
  }
  openFolder(data: NzTreeNode | Required<NzFormatEmitEvent>): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }
  activeNode(data: NzFormatEmitEvent): void {
    this.activedNode = data.node!;
  }
}
