import { AbstractControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() label: string;
  @Input() placeholder?: string;
  
  constructor() { }

  ngOnInit() {
  }

}
