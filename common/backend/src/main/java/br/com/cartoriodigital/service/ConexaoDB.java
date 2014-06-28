package br.com.cartoriodigital.service;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexaoDB {
    
	public ConexaoDB(){
		getConexao();
	}
	
	public static Connection getConexao(){
		Connection conecta = null;  
		try{
			Class.forName("com.mysql.jdbc.driver");  
			conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/solucart","root","root");  
			System.out.println("Conexão OK");
		}catch(Exception e){  
			System.out.println("Erro na conexão");       
	    }
		return conecta;
	}
}
