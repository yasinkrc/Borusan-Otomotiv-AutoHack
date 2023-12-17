package com.karaca.hasta.repo;

import com.karaca.hasta.models.Disease;
import com.karaca.hasta.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseRepo extends JpaRepository<Disease, Integer> {
}
