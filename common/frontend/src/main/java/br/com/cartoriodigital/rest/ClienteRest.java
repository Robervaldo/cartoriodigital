package br.com.cartoriodigital.rest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.cartoriodigital.model.Cliente;
import br.com.cartoriodigital.service.ClienteService;

@Path("/cliente")
public class ClienteRest{
	
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Cliente> getDefaultUserInJSON() {
		ClienteService clienteService = new ClienteService();
        return clienteService.listaCliente();
    }
}
