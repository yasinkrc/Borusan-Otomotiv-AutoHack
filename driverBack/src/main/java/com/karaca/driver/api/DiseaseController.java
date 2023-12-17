package com.karaca.hasta.api;

import com.karaca.hasta.dtos.SaveDiseaseDto;
import com.karaca.hasta.models.User;
import com.karaca.hasta.service.DiseaseService;
import com.karaca.hasta.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/disease")
@RequiredArgsConstructor
@CrossOrigin
public class DiseaseController {
    private final DiseaseService diseaseService;

    @PostMapping
    public ResponseEntity<?> saveDisease(@RequestBody SaveDiseaseDto saveDiseaseDto) {
        return ResponseEntity.ok(diseaseService.saveDisease(saveDiseaseDto));
    }

}
