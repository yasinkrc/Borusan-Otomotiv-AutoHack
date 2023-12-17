import {Component, Input} from '@angular/core';
import {GptResponse} from "../../gptResponse";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent {
  @Input() value: GptResponse = {
    message: '',
    danger: false,
  };
}
