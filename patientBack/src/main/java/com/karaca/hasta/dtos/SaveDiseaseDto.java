package com.karaca.hasta.dtos;

import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveDiseaseDto {
    private String comment;
    private String disease;
    private String identificationNumber;
    private String name;
    private String startingDate;
    private String surname;
}
