import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://localhost:8081/chatbot'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  chatWithBot(message: string) {
    return this.http.post<any>(this.apiUrl, { message });
  }
}
