package br.com.cartoriodigital.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.cartoriodigital.model.Cliente;


public class ClienteService {
	public List<Cliente> listaCliente() {
		List<Cliente> clienteList = new ArrayList<Cliente>();
		clienteList.add(new Cliente(001L, "Fulano1", new Date(), "Ativo"));
		clienteList.add(new Cliente(002L, "Fulano2", new Date(), "Ativo"));
		clienteList.add(new Cliente(003L, "Fulano3", new Date(), "Inativo"));
		clienteList.add(new Cliente(004L, "Fulano4", new Date(), "Ativo"));
		clienteList.add(new Cliente(005L, "Fulano5", new Date(), "Inativo"));
		clienteList.add(new Cliente(006L, "Fulano6", new Date(), "Ativo"));
		clienteList.add(new Cliente(007L, "Fulano7", new Date(), "Inativo"));
		clienteList.add(new Cliente(010L, "Fulano10", new Date(), "Ativo"));
		clienteList.add(new Cliente(011L, "Fulano11", new Date(), "Inativo"));
		clienteList.add(new Cliente(012L, "Fulano12", new Date(), "Ativo"));
		clienteList.add(new Cliente(013L, "Fulano13", new Date(), "Ativo"));
        return clienteList;
    }
}
