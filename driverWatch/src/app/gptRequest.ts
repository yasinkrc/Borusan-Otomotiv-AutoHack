import {GetPatientDetail} from "./getPatientDetail";
import {Value} from "./watch/watch.component";

export interface GptRequest {
  watchData: Value[];
  patientData: GetPatientDetail|null;
}
