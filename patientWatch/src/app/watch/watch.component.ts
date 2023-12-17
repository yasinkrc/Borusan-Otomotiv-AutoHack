import {Component, OnInit} from '@angular/core';
import {PatientService} from "../patient.service";
import {GptResponse} from "../gptResponse";
import {GptRequest} from "../gptRequest";
import {GetPatientDetail} from "../getPatientDetail";


export interface Value {
  icon: string;
  name: string;
  value: string;
}

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  isValue = false;
  values: Value[][] = [
    [
      {name: 'Sıcaklık', value: '29 C° - Az Bulutlu', icon: '☼'},
      {name: 'Nem', value: '55%', icon: '☂'},
      {name: 'Basınç', value: '0.97 atm', icon: '☁'},
      {name: 'Nabız', value: '68', icon: '♥'},
      {name: 'Kan Basıncı', value: '105/65', icon: '♡'},
      {name: 'Oksijen', value: '92%', icon: 'O2'},
      {name: 'Şeker', value: '130', icon: '☕'},
      {name: 'Adım Sayısı', value: '7500', icon: '🦶'},
      {name: 'Ses seviyesi', value: '82 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '7-9 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıcaklık', value: '27 C° - Parçalı Bulutlu'},
      {icon: '☂', name: 'Nem', value: '70%'},
      {icon: '☁', name: 'Basınç', value: '0.94 atm'},
      {name: 'Nabız', value: '63', icon: '♥'},
      {name: 'Kan Basıncı', value: '95/55', icon: '♡'},
      {name: 'Oksijen', value: '88%', icon: 'O2'},
      {name: 'Şeker', value: '140', icon: '☕'},
      {name: 'Adım Sayısı', value: '6500', icon: '🦶'},
      {name: 'Ses seviyesi', value: '78 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '6-8 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıcaklık', value: '26 C° - Hafif Yağmurlu'},
      {icon: '☂', name: 'Nem', value: '63%'},
      {icon: '☁', name: 'Basınç', value: '0.96 atm'},
      {name: 'Nabız', value: '66', icon: '♥'},
      {name: 'Kan Basıncı', value: '102/62', icon: '♡'},
      {name: 'Oksijen', value: '91%', icon: 'O2'},
      {name: 'Şeker', value: '133', icon: '☕'},
      {name: 'Adım Sayısı', value: '7200', icon: '🦶'},
      {name: 'Ses seviyesi', value: '83 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '7-9 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıcaklık', value: '30 C° - Açık Hava'},
      {icon: '☂', name: 'Nem', value: '58%'},
      {icon: '☁', name: 'Basınç', value: '0.99 atm'},
      {name: 'Nabız', value: '72', icon: '♥'},
      {name: 'Kan Basıncı', value: '108/68', icon: '♡'},
      {name: 'Oksijen', value: '94%', icon: 'O2'},
      {name: 'Şeker', value: '128', icon: '☕'},
      {name: 'Adım Sayısı', value: '7800', icon: '🦶'},
      {name: 'Ses seviyesi', value: '86 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '7-9 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıcaklk', value: '32 C° - Hafif Bulutlu'},
      {icon: '☂', name: 'Nem', value: '60%'},
      {icon: '☁', name: 'Basınç', value: '0.98 atm'},
      {name: 'Nabız', value: '70', icon: '♥'},
      {name: 'Kan Basıncı', value: '110/70', icon: '♡'},
      {name: 'Oksijen', value: '95%', icon: 'O2'},
      {name: 'Şeker', value: '135', icon: '☕'},
      {name: ' Adım Sayısı', value: '8000', icon: '🦶'},
      {name: 'Ses seviyesi', value: '85 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '7-9 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıcaklk', value: '28 C° - Bulutlu'},
      {icon: '☂', name: 'Nem', value: '75%'},
      {icon: '☁', name: 'Basınç', value: '0.95 atm'},
      {name: 'Nabız', value: '65', icon: '♥'},
      {name: 'Kan Basıncı', value: '100/60', icon: '♡'},
      {name: 'Oksijen', value: '90%', icon: 'O2'},
      {name: 'Şeker', value: '145', icon: '☕'},
      {name: ' Adım Sayısı', value: '6000', icon: '🦶'},
      {name: 'Ses seviyesi', value: '80 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '6-8 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıcaklk', value: '25 C° - Yağmurlu'},
      {icon: '☂', name: 'Nem', value: '80%'},
      {icon: '☁', name: 'Basınç', value: '0.92 atm'},
      {name: 'Nabız', value: '60', icon: '♥'},
      {name: 'Kan Basıncı', value: '90/50', icon: '♡'},
      {name: 'Oksijen', value: '85%', icon: 'O2'},
      {name: 'Şeker', value: '155', icon: '☕'},
      {name: ' Adım Sayısı', value: '4000', icon: '🦶'},
      {name: 'Ses seviyesi', value: '75 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '5-7 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıca', value: '22 C° - Fırtınalı'},
      {icon: '☂', name: 'Nem', value: '85%'},
      {icon: '☁', name: 'Basınç', value: '0.89 atm'},
      {name: 'Nabız', value: '55', icon: '♥'},
      {name: 'Kan Basıncı', value: '80/40', icon: '♡'},
      {name: 'Oksijen', value: '80%', icon: 'O2'},
      {name: 'Şeker', value: '165', icon: '☕'},
      {name: ' Adım Sayısı', value: '2000', icon: '🦶'},
      {name: 'Ses seviyesi', value: '70 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '4-6 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıcaklk', value: '18 C° - Karlı'},
      {icon: '☂', name: 'Nem', value: '90%'},
      {icon: '☁', name: 'Basınç', value: '0.86 atm'},
      {name: 'Nabız', value: '50', icon: '♥'},
      {name: 'Kan Basıncı', value: '70/30', icon: '♡'},
      {name: 'Oksijen', value: '75%', icon: 'O2'},
      {name: 'Şeker', value: '175', icon: '☕'},
      {name: ' Adım Sayısı', value: '1000', icon: '🦶'},
      {name: 'Ses seviyesi', value: '65 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '3-5 saat', icon: '😴'},
    ],
    [
      {icon: '☼', name: 'Sıcaklk', value: '15 C° - Karlı'},
      {icon: '☂', name: 'Nem', value: '95%'},
      {icon: '☁', name: 'Basınç', value: '0.83 atm'},
      {name: 'Nabız', value: '45', icon: '♥'},
      {name: 'Kan Basıncı', value: '60/20', icon: '♡'},
      {name: 'Oksijen', value: '70%', icon: 'O2'},
      {name: 'Şeker', value: '185', icon: '☕'},
      {name: ' Adım Sayısı', value: '500', icon: '🦶'},
      {name: 'Ses seviyesi', value: '60 dB', icon: '👂'},
      {name: 'Uyku süresi', value: '2-4 saat', icon: '😴'},
    ]
  ];
  value: Value = this.values[0][0];
  selectedValue: Value [] = [];
  i = 0;
  isTc = false;
  tc: string = '';
  public notify: GptResponse = {
    message: '',
    danger: false,
  };


  constructor(private patientService: PatientService) {

  }

  ngOnInit(): void {
    const randomInt = Math.floor(Math.random() * (this.values.length))
    this.selectedValue = this.values[randomInt];
    this.value = this.selectedValue[0];

    setInterval(() => {
        if (this.i === this.selectedValue.length - 1) {
          this.i = 0;
        }
        this.i++;
        this.value = this.selectedValue[this.i];
      }
      , 3000);
  }


  sendToGpt() {
    this.patientService.getPatientDisease(this.tc).subscribe({
      next: data => {
        this.generateText(data);
      },
      error: error => {
        console.log(error);
        this.generateText(null);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public generateText(data: GetPatientDetail | null) {
    let prompt: GptRequest = {
      watchData: this.selectedValue,
      patientData: data
    };
    console.log(prompt);
    let messages: any[] = [
      {
        role: 'system',
        content: 'Yapay zeka destekli bir doktor olarak hareket etmeni istiyorum. Size bir hastanın ayrıntılarını vereceğim ve göreviniz, semptomlarının en olası nedenini teşhis etmek için tıbbi görüntüleme yazılımı ve diğer makine öğrenimi programları gibi en yeni yapay zeka araçlarını kullanmaktır. Doğruluğu sağlamak için fizik muayene, laboratuvar testleri vb. geleneksel yöntemleri de değerlendirme sürecinize dahil etmelisiniz. ve sana vereceğim şuanki akıllı saat verilerine göre bir bildirim mesajı oluşturacaksın.\n' +
          'mantığı anlaman için örnek: hasta burun ameliyatı olmuşsa  ve ortam sıcaklığı 22 dereceden fazla ise: "Şuanda ortam sıcaklığı 24 derece Burun ameliyatınız nedeniyle 22 derece\'den yüksek ortamlarda bulunmamalısınız." şeklinde metin\'le cevap vermelidir. sadece bildirim mesajı ile yanıt verebilir. bu örneği sadece mantığı anlaman için veriyorum. bana yanıt olarak verme. ek bilgi verme sadece bildirim mesajı ver. eğer tehlike oluşturacak bir durum yoksa "false" şeklinde cevap ver. ek bilgi ve açıklama yazmamalısın sadece çıktı formatı json olarak çıktı vermelisin. \n' +
          'sana bu şekilde bir data verdğimde yukardaki önergeyi baz alarak, akılla saat verilerine ve hastanın hastalıklarına ve doktroun tavsiyelrine göre bana bir saat bildirimi vermeni isteyecem sadece cıktıyı ver yorum vb bişey yapma\n' +
          'Çıktı Formatı: {"message":"bildirim_message", "danger":true} eğer hasta ve durmu hakkında bir bilgi yoksa genel olark bildirim_message kısmına yorumunu yazabilirsin. eğer bir tehlike yoksa danger kısmına false yazmalısın. eğer bir tehlike varsa danger kısmına true yazmalısın. \n'
      },
    ];

    messages.push({role: 'user', content: JSON.stringify(prompt)});
    console.log("messages", messages)
    this.patientService.generateText(messages).subscribe({
      next: data => {
        const content = data.choices[0].message.content;
        // to Json
        this.notify = JSON.parse(content)
        this.isValue = true;
      },
      error: error => {
        console.log(error);
        alert('Hata oluştu' + error.message)
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}
