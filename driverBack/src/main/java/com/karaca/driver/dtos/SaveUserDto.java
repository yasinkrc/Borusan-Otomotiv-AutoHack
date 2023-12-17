package com.karaca.hasta.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveUserDto {
    private String name;
    private String surname;
    private String identityNumber;
}
