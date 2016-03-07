package com.app.controllers;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Locale;
import java.util.PropertyResourceBundle;
import java.util.ResourceBundle;

public class Sample {
	
	public static void main(String[] args) {
		
		
		      System.out.println(stringMatches("Start with a good"));
		      System.out.println(stringMatches("Start with a kind word and end with a good deed."));
		      System.out.println(stringMatches("Start with a deed."));
		

		  
			
	}
	
	 public static boolean stringMatches(String string)
	   {
	      return string.matches("Start with a \\w+");
	   }
	
	

}
