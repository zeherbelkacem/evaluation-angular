package com.fms.booking;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookingBackApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BookingBackApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
