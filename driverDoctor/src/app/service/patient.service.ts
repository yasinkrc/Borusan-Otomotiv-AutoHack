import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SavedDisease} from "./savedDisease";
import {GetPatientAndDisease} from "./getPatientAndDisease";
import {SaveDisease} from "./saveDisease";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  public saveDisease(disease: SaveDisease): Observable<SavedDisease> {
    return this.http.post<SavedDisease>('http://localhost:8080/api/disease', disease);
  }

  public getPatientDisease(identityNumber: number): Observable<GetPatientAndDisease> {
    // 'http://localhost:8080/api/user?identityNumber=445878935666
    return this.http.get<GetPatientAndDisease>('http://localhost:8080/api/user?identityNumber=' + identityNumber);
  }
}
