package br.com.cartoriodigital.model;

import java.util.Date;

public class Cliente {
	private Long id;
	private String nome;
    private Date dataCadastro;
    private String status;
    
    public Cliente(){
    	
    }
	
    public Cliente(Long id, String nome, Date dataCadastro, String status){
    	this.id = id;
    	this.nome = nome;
    	this.dataCadastro = dataCadastro;
    	this.status = status;
    }
    
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Date getDataCadastro() {
		return dataCadastro;
	}
	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
