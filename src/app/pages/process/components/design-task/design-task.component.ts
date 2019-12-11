import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-design-task',
  templateUrl: './design-task.component.html',
  styleUrls: ['./design-task.component.scss']
})
export class DesignTaskComponent implements OnInit {

  public seachForm: FormGroup;

  public dataSet = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.seachForm = this.fb.group({
      taskNumber: '',
      feedbackName: '',
      createName: '',
      IsProductEnabled: '',
      isProcessState: '',
      isProcessDate: 'entryTime',
      dateRange: []
    });
  }

}
