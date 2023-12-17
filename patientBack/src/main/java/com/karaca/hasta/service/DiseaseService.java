package com.karaca.hasta.service;

import com.karaca.hasta.dtos.SaveDiseaseDto;
import com.karaca.hasta.dtos.SaveUserDto;
import com.karaca.hasta.models.Disease;
import com.karaca.hasta.models.User;
import com.karaca.hasta.repo.DiseaseRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DiseaseService {
    private final DiseaseRepo diseaseRepo;
    private final UserService userService;

    public Disease saveDisease(SaveDiseaseDto saveDiseaseDto) {
        Optional<User> userByIdentityNumber = userService.findUserByIdentityNumber(saveDiseaseDto.getIdentificationNumber());

        Disease disease = new Disease();
        disease.setDoctorComment(saveDiseaseDto.getComment());
        disease.setName(saveDiseaseDto.getDisease());
        disease.setDescription("Hastalık");

        if (userByIdentityNumber.isPresent()) {
            disease.setUser(userByIdentityNumber.get());
        } else {
            User user = new User();
            user.setName(saveDiseaseDto.getName());
            user.setSurname(saveDiseaseDto.getSurname());
            user.setIdentityNumber(saveDiseaseDto.getIdentificationNumber());
            disease.setUser(userService.saveUser(user));
        }

        return diseaseRepo.save(disease);

    }
}
