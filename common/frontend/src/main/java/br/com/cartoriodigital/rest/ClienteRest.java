package br.com.cartoriodigital.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;

import br.com.cartoriodigital.model.Cliente;
import br.com.cartoriodigital.service.ClienteService;


@Path("cliente")
public class ClienteRest{
	
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Cliente> getClientesJSON() {
		ClienteService clienteService = new ClienteService();
        return clienteService.listaCliente();
    }
	
	@POST
    @Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
    public void saveClientesJSON(Cliente cliente) {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(SerializationConfig.Feature.WRAP_ROOT_VALUE, true);
//		mapper.configure(DeserializationConfig.Feature.UNWRAP_ROOT_VALUE, true);
		ClienteService clienteService = new ClienteService();
        clienteService.salvarCliente(cliente);
    }
}
