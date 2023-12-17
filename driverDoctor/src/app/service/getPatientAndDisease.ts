export interface GetPatientAndDisease {
  /*
  {
  "id": 2,
  "name": "asfd",
  "surname": "asdfasf",
  "identityNumber": "445878935666",
  "diseases": [
    {
      "id": 4,
      "name": "asdfasf",
      "description": "Hastalık",
      "doctorComment": "asdfa"
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
