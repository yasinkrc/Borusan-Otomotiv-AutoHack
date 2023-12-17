package com.karaca.hasta;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class Gpt3Service {
    @Value("${gpt3.apiKey}") // API anahtarını application.properties veya application.yml dosyasından alabilirsiniz.
    private String apiKey;

    private final String apiUrl = "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions";

    public String generateGpt3Response(String prompt) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        String requestBody = "{\"prompt\": \"" + prompt + "\", \"max_tokens\": 50}"; // İsteğinizi burada yapılandırabilirsiniz.

        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.POST, null, String.class);

        return response.getBody();
    }
}
