package br.com.cartoriodigital.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class Cliente implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name="clie_id")
	private Long id;
	
	@Column(name="clie_nome")
	private String nome;
	
	@Column(name="clie_data")
    private String dataCadastro;
	
	@Column(name="clie_status")
    private String status;
    
    public Cliente(){
    	
    }
	
    public Cliente(Long id, String nome, String dataCadastro, String status){
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
	public String getDataCadastro() {
		return dataCadastro;
	}
	public void setDataCadastro(String dataCadastro) {
		this.dataCadastro = dataCadastro;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
