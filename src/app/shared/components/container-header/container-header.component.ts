import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-container-header',
  templateUrl: './container-header.component.html',
  styleUrls: ['./container-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerHeaderComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

}
