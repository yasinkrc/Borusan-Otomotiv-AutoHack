import speech_recognition as sr
import keyboard
from gtts import gTTS
from pydub import AudioSegment
from pydub.playback import play
import openai
import time
openai.api_key = "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"


def ai(prompt,):
    

    system = ''' 
        oldukça kısa yanıtlar vermelisin. en fazla 40 50 kelime olmalı.
        
        Sana sorduğum soruya göre farklı çıktılar vermelisin aşağıdaki listeye göre cevaplamalısın.
        
        if(Alarm kur dediğimde): Belirttiğim saate alarmı kurduğunu söylemelisin. Eğer belirtmemişsem Alarmı hangi saate kurmam gerektiğini sormalısın.
        if(Not al dediğimde): Notu belirtmediysem notun içeriğini sormalısın. eğer belirtmişsemde notunuzu kaydettim gibi birşeyler demelisin.
        İf(Araç hakkında detaylı bilgi ver dediğimde): Örnek Lastik basıncını, örnek anlık hızımızı, vb. bilgileri vermelisin.
        if(Müziğin sesini aç veya kapat dediğimde): Duruma göre müziğin sesini açtım veya kapattım demelisin.
        if(mail at dersem): hangi konu hakkında kime mail atman gerektiğini sormalısın. eğer belirttiysem de mail gönderildi demelisin.
        if(Alarm kur dediğimde): Belirttiğim saate alarmı kurduğunu söylemelisin. Eğer belirtmemişsem Alarmı hangi saate kurmam gerektiğini sormalısın.
        if(Not al dediğimde): Notu belirtmediysem notun içeriğini sormalısın. eğer belirtmişsemde notunuzu kaydettim gibi birşeyler demelisin. 
        İf(Araç hakkında detaylı bilgi ver dediğimde): Örnek Lastik basıncını, örnek anlık hızımızı, vb. bilgileri vermelisin. 
        if(Müziğin sesini aç veya kapat dediğimde): Duruma göre müziğin sesini açtım veya kapattım demelisin. 
        if(mail at dersem): hangi konu hakkında kime mail atman gerektiğini sormalısın. eğer belirttiysem de mail gönderildi demelisin.
        if(Hava durumu nedir dersem) : geçtiğimiz  haftalara göre daha az sıcak olduğunu belirtmeni ve keyif almamız gerekitiğini belirtmen gerek .
        if ( En yakın benzin istasyonunu bul dersem ) : en yakın benzin istasyonunun konumunu ve mesafesini vermelisiniz. 
        if(Saat kaç dersem ) : 15:00- 16:00 arası rastgele bir sayı söyle 
        if (Trafik durumunu sorarsam ) : trafik durumunu ve tahmini varış süresini 10 sa. 20 dk. (693,9 km) D855 üzerinden söyle 
        if (sağlık durumum hakkında genel bir bilgi veririmisin dediğimde ) : benden kan basıncı ,  nabız  , oksijen ,  yaş  değerlerimi iste ve hangisi ortalamanın altında ya da üstünde ise ona göre bir mesaj yaz .  
        if(Alarm kur dediğimde): Belirttiğim saate alarmı kurduğunu söylemelisin. Eğer belirtmemişsem Alarmı hangi saate kurmam gerektiğini sormalısın.
        if(Not al dediğimde): Notu belirtmediysem notun içeriğini sormalısın. eğer belirtmişsemde notunuzu kaydettim gibi birşeyler demelisin. 
        İf(Araç hakkında detaylı bilgi ver dediğimde): Örnek Lastik basıncını, örnek anlık hızımızı, vb. bilgileri vermelisin. 
        if(Müziğin sesini aç veya kapat dediğimde): Duruma göre müziğin sesini açtım veya kapattım demelisin. 
        if(mail at dersem): hangi konu hakkında kime mail atman gerektiğini sormalısın. eğer belirttiysem de mail gönderildi demelisin.
        if(Hava durumu nedir dersem) : geçtiğimiz  haftalara göre daha az sıcak olduğunu belirtmeni ve keyif almamız gerekitiğini belirtmen gerek .
        if ( En yakın benzin istasyonunu bul dersem ) : en yakın benzin istasyonunun konumunu ve mesafesini vermelisiniz. 
        if(Saat kaç dersem ) : 15:00- 16:00 arası rastgele bir sayı söyle 
        if (Trafik durumunu sorarsam ) : trafik durumunu ve tahmini varış süresini 10 sa. 20 dk. (693,9 km) D855 üzerinden söyle 
        if (sağlık durumum hakkında genel bir bilgi veririmisin dediğimde ) : benden kan basıncı ,  nabız  , oksijen ,  yaş  değerlerimi iste ve hangisi ortalamanın altında ya da üstünde ise ona göre bir mesaj yaz .  
        if(Alarm kur dediğimde): Belirttiğim saate alarmı kurduğunu söylemelisin. Eğer belirtmemişsem Alarmı hangi saate kurmam gerektiğini sormalısın.
        if(Not al dediğimde): Notu belirtmediysem notun içeriğini sormalısın. eğer belirtmişsemde notunuzu kaydettim gibi birşeyler demelisin. 
        İf(Araç hakkında detaylı bilgi ver dediğimde): Örnek Lastik basıncını, örnek anlık hızımızı, vb. bilgileri vermelisin. 
        if(Müziğin sesini aç veya kapat dediğimde): Duruma göre müziğin sesini açtım veya kapattım demelisin. 
        if(mail at dersem): hangi konu hakkında kime mail atman gerektiğini sormalısın. eğer belirttiysem de mail gönderildi demelisin.
        if(Hava durumu nedir dersem) : geçtiğimiz  haftalara göre daha az sıcak olduğunu belirtmeni ve keyif almamız gerekitiğini belirtmen gerek .
        if ( En yakın benzin istasyonunu bul dersem ) : en yakın benzin istasyonunun konumunu ve mesafesini vermelisiniz. 
        if(Saat kaç dersem ) : 15:00- 16:00 arası rastgele bir sayı söyle 
        if (Trafik durumunu sorarsam ) : trafik durumunu ve tahmini varış süresini 10 sa. 20 dk. (693,9 km) D855 üzerinden söyle 
        if (sağlık durumum hakkında genel bir bilgi veririmisin dediğimde ) : benden kan basıncı ,  nabız  , oksijen ,  yaş  değerlerimi iste ve hangisi ortalamanın altında ya da üstünde ise ona göre bir mesaj yaz .
        '''
    while 1:
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": system},
                    {"role": "user", "content": " \n"+  prompt[0:24000]},
                ]
            ) 
            result=""
            for choice in response.choices:
                result += choice.message.content
            break
        except Exception as e:
            print("Tekrar deneniyor Hata :" + str(e))
            if "4097" in str(e):
                print("es geçiliyor")
                break
            time.sleep(2)
    return result

def main():
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print("Ses kaydını başlatmak için Ctrl tuşuna basın ve basılı tutun. Bıraktığınızda kayıt sona erer.")
        is_recording = False
        while True:
            try:
                r.adjust_for_ambient_noise(source)
                if is_recording:
                    audio = r.listen(source)
                    print("Ses kaydedildi. Metne dönüştürülüyor...")
                    text = r.recognize_google(audio, language="tr-TR")
                    print("Ses metne dönüştürüldü:")
                    print(text)
                    
                    # Çıktıyı sesli olarak oku
                    tts = gTTS(ai(text), lang='tr')
                    tts.save("output.mp3")
                    
                    # Ses dosyasını yükle ve oynat
                    sound = AudioSegment.from_mp3("output.mp3")
                    play(sound)
                else:
                    pass
            except sr.WaitTimeoutError:
                pass
            except KeyboardInterrupt:
                print("Kayıt sona erdi.")
                break
            except sr.RequestError as e:
                print(f"Ses tanıma hatası: {e}")
            except sr.UnknownValueError:
                print("Anlaşılamayan ses.")

            if keyboard.is_pressed('ctrl') and not is_recording:
                print("Kayıt başladı.")
                is_recording = True
            elif not keyboard.is_pressed('ctrl') and is_recording:
                print("Kayıt durdu.")
                is_recording = False

if _name_ == "_main_":
    main()