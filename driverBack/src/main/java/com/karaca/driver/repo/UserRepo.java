package com.karaca.hasta.repo;

import com.karaca.hasta.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {

   User findUserByIdentityNumber(String identityNumber);
}
