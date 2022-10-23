import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-btn-accept',
  templateUrl: './btn-accept.component.html',
  styleUrls: ['./btn-accept.component.scss']
})
export class BtnAcceptComponent implements OnInit {
  @Input() label:string = '';
  @Input() disabled: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
