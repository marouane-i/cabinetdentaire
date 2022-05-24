import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  
  disabled:boolean = false;

  constructor(private http:HttpClient, private router:Router) { }
  
  submit(form:any){
    console.log(form);
    this.disabled = true;
    this.webToLead(form.value.first_name, form.value.last_name, form.value.email, form.value.company, form.value.city, form.value.state);
  }
  webToLead(firstName:string, lastName:string, email:string, company:string, city:string, state:string) {
    const form = document.createElement('form');
  
    form.method = 'POST';
    form.action = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
    form.target = 'salesforce'; 
  
    form.appendChild(this.createHiddenInput('oid', '00D8d000002cnSW'));
    form.appendChild(this.createHiddenInput('retURL', 'google.com'));
    form.appendChild(this.createHiddenInput('first_name', firstName));
    form.appendChild(this.createHiddenInput('last_name', lastName));
    form.appendChild(this.createHiddenInput('email', email));
    form.appendChild(this.createHiddenInput('company', company));
    form.appendChild(this.createHiddenInput('city', city));
    form.appendChild(this.createHiddenInput('state', state));
  
    document.body.appendChild(form);
  
    form.submit();

    setTimeout(()=>{
      this.router.navigate(["/"]);
    },5000)
    
  }
  
  createHiddenInput(name:string, value:string) {
    const input = document.createElement('input');
    input.name = name;
    input.value = value;
    input.setAttribute('type', 'hidden');
    return input;
  }
}
