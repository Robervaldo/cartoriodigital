package br.com.cartoriodigital.service;

import java.util.ArrayList;
import java.util.List;

import br.com.cartoriodigital.dao.ClienteDAO;
import br.com.cartoriodigital.model.Cliente;


public class ClienteService {
	
	public List<Cliente> listaCliente() {
		System.out.println("Select Cliente!");
		List<Cliente> clienteList = new ArrayList<Cliente>();
		clienteList.add(new Cliente(001L, "Fulano", "19/06/2014", "Ativo"));
		clienteList.add(new Cliente(002L, "Ciclano", "19/06/2014", "Ativo"));
		clienteList.add(new Cliente(003L, "Beltrano", "19/06/2014", "Inativo"));
		clienteList.add(new Cliente(004L, "Irmão do Fulano", "19/06/2014", "Ativo"));
		clienteList.add(new Cliente(005L, "Fulano5", "19/06/2014", "Inativo"));
        return clienteList;
    }
	
	public List<Cliente> findCliente(){
		ClienteDAO dao = new ClienteDAO();
		return dao.findAll();
	}
	
	public void salvarCliente(Cliente cliente){
		ClienteDAO dao = new ClienteDAO();
		dao.persist(cliente);
		System.out.println("==> Nome: "+cliente.getNome()+" Data: "+cliente.getDataCadastro()+" Status: "+cliente.getStatus());
	}
}
