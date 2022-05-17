package com.valtech.lorem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoremIpsumController {

    @GetMapping(value = "/name")
    public String getName() {
        return "Lorem Ipsum Application";
    }
}
