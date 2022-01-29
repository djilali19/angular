import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DjilaliService {

    tab : number[] = [1,2];

    getAllDjilali(): number[] {
        return this.tab;
    }
  
}