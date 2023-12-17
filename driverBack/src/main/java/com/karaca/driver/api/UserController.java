package com.karaca.hasta.api;

import com.karaca.hasta.models.User;
import com.karaca.hasta.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping()
    public ResponseEntity<User> getUser(@RequestParam String identityNumber) {
        Optional<User> userByIdentityNumber = userService.findUserByIdentityNumber(identityNumber);
        return userByIdentityNumber.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllUser() {
        return ResponseEntity.ok(userService.getAllUser());
    }
}
