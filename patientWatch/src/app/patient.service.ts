import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetPatientDetail} from "./getPatientDetail";
import {GptRequest} from "./gptRequest";
import {GptResponse} from "./gptResponse";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {
  }

  public getPatientDisease(identityNumber: string): Observable<GetPatientDetail> {
    return this.http.get<GetPatientDetail>('http://localhost:8080/api/user?identityNumber=' + identityNumber);
  }


  generateText(messages: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer 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'); // OpenAI API anahtarınızı buraya ekleyin
    const data = {
      model: 'gpt-3.5-turbo',
      messages: messages,
    };

    return this.http.post(this.apiUrl, data, {headers});
  }
}
