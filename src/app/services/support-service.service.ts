import { Injectable } from '@angular/core';
import { supportService } from '../models/supportService';

@Injectable({
  providedIn: 'root'
})
export class SupportServiceService {
async postSupport(data: Omit<supportService, 'id'>): Promise<supportService> {
  const response = await fetch('http://localhost:3000/supportService', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}
}
