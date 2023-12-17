export interface GetPatientDetail {
  /*
  http://localhost:8080/api/user?identityNumber=44587965122
Server response
Code	Details
200
Response body
Download
{
  "id": 4,
  "name": "ismail",
  "surname": "karaca",
  "identityNumber": "44587965122",
  "diseases": [
    {
      "id": 6,
      "name": "Nezle",
      "description": "Hastalık",
      "doctorComment": "Bol sıvı tüketin: Su, bitki çayları veya hafif meyve suyu gibi sıvılar içerek vücudunuzun hidrasyonunu sağlayın."
    }
  ]
}
   */
  id: number;
  name: string;
  surname: string;
  identityNumber: string;
  diseases: [
    {
      id: number;
      name: string;
      description: string;
      doctorComment: string;
    }
  ]
}
