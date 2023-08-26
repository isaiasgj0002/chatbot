import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChatbotService } from 'src/app/services/chatbot.services';


@Component({
  selector: 'app-chat-principal',
  templateUrl: './chat-principal.component.html',
  styleUrls: ['./chat-principal.component.css']
})
export class ChatPrincipalComponent {
  message: string = '';
  response: string = '';

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    this.chatbotService.chatWithBot(this.message)
    .subscribe(chatResponse => {
      this.response = chatResponse.response;
      this.message == '';
    },
    error => {
      console.log(error);
    });
    }
}
