package com.app.controllers;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;

import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;


import java.io.File;

public class Sample {

	public static void main(String argv[]) {

		try {

			File fXmlFile = new File("129 - YESAKE - Mitsukoshi.xml");
			
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory .newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse(fXmlFile);

			System.out.println("Root element :" + doc.getDocumentElement().getNodeName());
			
			NodeList xmlCategories = doc.getElementsByTagName("my:myFields");
			for (int i = 0; i < xmlCategories.getLength(); i++) {
			    Node category = xmlCategories.item(i);
			    if (category.hasChildNodes()) {
			        System.out.println("\nCurrent element: " + category.getNodeName());
			        if (category.getNodeType() == Node.ELEMENT_NODE) {
			            Element element = (Element) category;

			            System.out.println("Node Name: " + element.getNodeName() );
			        }
			    }
			}

			/*if (doc.hasChildNodes()) {

				printNote(doc.getChildNodes());

			}*/
			
			/*
			 * doc.getDocumentElement().normalize();
			 * System.out.println(doc.getDocumentElement().getNodeName());
			 * NodeList nList = doc.getElementsByTagName("my:Start_Section");
			 * System.out.println(
			 * "--------------------------------------------------------------"
			 * );
			 * 
			 * for (int temp = 0; temp < nList.getLength(); temp++) { Node nNode
			 * = nList.item(temp); System.out.println("\nCurrent Element : " +
			 * nNode.getNodeName()); if (nNode.getNodeType() ==
			 * Node.ELEMENT_NODE) { Element eElement = (Element) nNode;
			 * System.out.println("File Name : " +
			 * eElement.getElementsByTagName(
			 * "my:File_Name").item(0).getTextContent());
			 * System.out.println("Id Number : " +
			 * eElement.getElementsByTagName(
			 * "my:ID_Num").item(0).getTextContent()); } }
			 */
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static void printNote(NodeList nodeList) {
		
		for (int temp = 0; temp < nodeList.getLength(); temp++)
	      {
	         Node node = nodeList.item(temp);
	         if (node.getNodeType() == Node.ELEMENT_NODE)
	         {
	            System.out.println("Node Name: " + node.getNodeName() + ", Value: " + node.getTextContent());
	            //Check all attributes
	            if (node.hasAttributes()) {
	               // get attributes names and values
	               NamedNodeMap nodeMap = node.getAttributes();
	               for (int i = 0; i < nodeMap.getLength(); i++)
	               {
	                   Node tempNode = nodeMap.item(i);
	                   System.out.println("Attr name: " + tempNode.getNodeName()+ ", Value: " + tempNode.getNodeValue());
	               }
	               if (node.hasChildNodes()) {
	                  //We got more childs; Let's visit them as well
	            	   printNote(node.getChildNodes());
	               }
	           }
	         }
	      }
	}

}