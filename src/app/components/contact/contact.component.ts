import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { LeadserviceService } from 'src/app/leadservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  public leadForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private leadservice:LeadserviceService) { }

  ngOnInit(): void {
      this.leadForm = new FormGroup({
        oid:new FormControl('00D8d000002cnSW'),
        firstName:new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        city: new FormControl(),
        phone:new FormControl(),
        description:new FormControl()
      })
  }
  onSubmit(){
    console.log(this.leadForm.value);
    console.log(JSON.stringify(this.leadForm.value))
    this.leadservice.sendLead(JSON.stringify(this.leadForm.value));
  }
  /* action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" */
}
