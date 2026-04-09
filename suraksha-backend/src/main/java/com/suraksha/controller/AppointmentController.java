package com.suraksha.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.suraksha.dto.AppointmentRequest;
import com.suraksha.entity.Appointment;
import com.suraksha.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/book")
    public String bookAppointment(@RequestBody AppointmentRequest request) {
        return appointmentService.bookAppointment(request);
    }

    @GetMapping("/victim/{email}")
    public List<Appointment> getVictimAppointments(@PathVariable String email) {
        return appointmentService.getAppointmentsByVictim(email);
    }

    @GetMapping("/type/{type}")
    public List<Appointment> getAppointmentsByType(@PathVariable String type) {
        return appointmentService.getAppointmentsByType(type);
    }

    @GetMapping("/all")
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }
}