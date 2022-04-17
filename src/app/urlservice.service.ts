import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlserviceService {

  public apiUrl = 'http://localhost:3000/webapi/'
  constructor() { }
}
