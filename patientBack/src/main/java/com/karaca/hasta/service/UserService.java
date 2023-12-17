package com.karaca.hasta.service;

import com.karaca.hasta.dtos.SaveUserDto;
import com.karaca.hasta.models.User;
import com.karaca.hasta.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepo userRepo;

    public User saveUser(SaveUserDto saveUserDto) {
        User user = new User();
        user.setName(saveUserDto.getName());
        user.setSurname(saveUserDto.getSurname());
        user.setIdentityNumber(saveUserDto.getIdentityNumber());
        return userRepo.save(user);
    }

    public User saveUser(User user) {
        return userRepo.save(user);
    }

    public Optional<User> findUserByIdentityNumber(String identityNumber) {
        return Optional.ofNullable(userRepo.findUserByIdentityNumber(identityNumber));
    }

    public List<User> getAllUser() {
        return userRepo.findAll();
    }
}
