package com.gen;

import java.util.Scanner;

public class TextoInvertido {

	public static void main(String[] args) {
		/*
		 * Crear un programa en Java que realice lo siguiente:
			eduardo
			odraude
			Debe solicitar al usuario por consola una palabra o frase.
			Debe mostrar por consola el texto escrito al revés.
			Entrada: 
			Salida: 
			Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.
		 * 
		 * 
		 * */
		
		
				Scanner myScan = new Scanner(System.in);
				System.out.println("Enter a word or sentence ");
				
				String normal = myScan.nextLine();
				myScan.close();
					
				String backward = "";
				
				char[] charArray = normal.toCharArray();
				
				for (int i=charArray.length-1; i>=0; i--) {
					System.out.print(charArray[i]);
				}
				System.out.println(backward);
		

	}

}
