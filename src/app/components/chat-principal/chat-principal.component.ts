import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChatbotService } from 'src/app/services/chatbot.services';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chat-principal',
  templateUrl: './chat-principal.component.html',
  styleUrls: ['./chat-principal.component.css']
})
export class ChatPrincipalComponent {
  messages: ChatMessage[] = [];
  message: string = '';
  response: string = '';

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (this.message.trim() === '') {
      return;
    }

    this.messages.push({ text: this.message, isUser: true });

    this.chatbotService.chatWithBot(this.message).subscribe(
      chatResponse => {
        this.messages.push({ text: chatResponse.response, isUser: false });
        this.message = ''; // Limpiar el contenido de la caja de texto
      },
      error => {
        console.log(error);
      }
    );
    }
}
