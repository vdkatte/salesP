import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  path = new Subject<string>();
  navigationPath$ = this.path.asObservable();
  constructor() { }
  roleAccess(access:string){
    this.path.next(access);
  }
}
