package com.gen;

import java.util.HashMap;
import java.util.Scanner;

public class Dictionary {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
	    HashMap<String, String> dictionary = new HashMap<>();

	    dictionary.put("Correr", "Run");
	    dictionary.put("Hablar", "Talk");
	    dictionary.put("Computadora", "Computer");
	    dictionary.put("Escuela", "School");
	    dictionary.put("Perro", "Dog");
	    dictionary.put("Gato", "Cat");
	    dictionary.put("Galletas", "Cookies");
	    dictionary.put("Codigo", "Code");
	    dictionary.put("Juguete", "Toy");
	    dictionary.put("Libro", "Book");
	    dictionary.put("Ventana", "Window");

	    dictionary.put("Playera", "Shirt");
	    dictionary.put("Limpio", "Clean");
	    dictionary.put("Caja", "Box");
	    dictionary.put("Impresora", "Printer");
	    dictionary.put("Carro", "Car");
	    dictionary.put("Silla", "Chair");
	    dictionary.put("Tarjeta", "Card");
	    dictionary.put("Cesto", "Basquet");
	    dictionary.put("Papa", "Potato");
	    dictionary.put("Tenedor", "Fork");
	    dictionary.put("Tio", "Uncle");

	    System.out.println("Bienvenido a tu traductor automatico");
	    System.out.println("Ingresa una palabra en espanol: ");
	    String wordSpanish = in.nextLine();
	    System.out.println(
	    		
	      dictionary.containsKey(wordSpanish.toLowerCase())
	        ? dictionary.get(wordSpanish.toLowerCase())
	        : "La palabra no se encuentra en el diccionario."
	    );
	    in.close();

	}

}
