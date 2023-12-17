import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PatientService} from "../../service/patient.service";
import {SavedDisease} from "../../service/savedDisease";
import {SaveDisease} from "../../service/saveDisease";
import Swal from "sweetalert2";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
  }

  savePatient(patientRegisterForm: NgForm) {
    if (patientRegisterForm.invalid) {
      Swal.fire({
        title: 'Hata',
        text: 'Formu eksiksiz doldurunuz',
        icon: 'error',
        confirmButtonText: 'Tamam'
      })
      return;
    }
    let patient: SaveDisease = {
      comment: patientRegisterForm.value.comment,
      disease: patientRegisterForm.value.disease,
      identificationNumber: patientRegisterForm.value.identification_number,
      name: patientRegisterForm.value.name,
      surname: patientRegisterForm.value.surname
    }
    console.log(patient)
    this.patientService.saveDisease(patient).subscribe({
      next: data => {
        Swal.fire({
          title: 'Başarılı',
          text: 'Hasta kaydedildi',
          icon: 'success',
          confirmButtonText: 'Tamam'
        }).then((result) => {
          if (result.value) {
            window.location.reload();
          }
        })
        console.log(data);
        patientRegisterForm.reset();
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
