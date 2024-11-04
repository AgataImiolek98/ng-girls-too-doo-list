import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getData(key: string): string[] | [] {
    const storage: string | null= localStorage.getItem(key);
    if(storage) {
      return JSON.parse(storage); 
    }
    return []
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
