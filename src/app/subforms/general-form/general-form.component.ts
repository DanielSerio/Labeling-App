import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {
  public generalForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.generalForm = this.fb.group({
      'specName': ['', [Validators.required, Validators.pattern(/[A-Z]{2}-LS-\d{4}/)]],
      'specDesc': ['', [Validators.required, Validators.minLength(5)]]
    });
  }
}
