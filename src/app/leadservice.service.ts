import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeadserviceService {

  constructor(private httpClient:HttpClient) { }

  sendLead(lead:any){
    this.httpClient.post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',lead).subscribe({
      next(sec){
        alert("Votre informations son bien enregestre")
        console.log(sec);
      },
      error(error){
        alert("Le formulaire n'est pas envoyer")
        console.log(error);
      }
    })
  }

}
