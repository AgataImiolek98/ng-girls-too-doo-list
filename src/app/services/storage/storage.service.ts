import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getData(key: string): string[] | [] {
    const storage: string | null= localStorage.getItem(key);
    return storage ? JSON.parse(storage) : [];
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
