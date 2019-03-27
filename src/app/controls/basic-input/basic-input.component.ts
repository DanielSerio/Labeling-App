import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() label: string;
  @Input() placeholder?: string;

  constructor() { }

  ngOnInit() {
  }

}
