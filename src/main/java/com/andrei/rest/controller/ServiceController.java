package com.andrei.rest.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/service")
public class ServiceController {

    @RequestMapping(value = "/hello")
    public String hello() {
        return "Hello, my name is Andrei!!!";
    }

}
