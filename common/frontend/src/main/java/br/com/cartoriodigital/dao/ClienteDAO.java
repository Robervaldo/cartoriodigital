package br.com.cartoriodigital.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import br.com.cartoriodigital.model.Cliente;

public class ClienteDAO{

	protected EntityManager entityManager;

	public ClienteDAO() {
	    entityManager = getEntityManager();
	}
	
	private EntityManager getEntityManager() {
	    EntityManagerFactory factory = Persistence.createEntityManagerFactory("WeHaveSciencePU");
	    if (entityManager == null) {
	        entityManager = factory.createEntityManager();
	    }
	
	    return entityManager;
	}
	
	@SuppressWarnings("unchecked")
    public List<Cliente> findAll() {
        return entityManager.createQuery("FROM " + Cliente.class.getName()).getResultList();
    }
	
	public void persist(Cliente cliente) {
        try {
            entityManager.getTransaction().begin();
            entityManager.persist(cliente);
            entityManager.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
            entityManager.getTransaction().rollback();
        }
    }
//public class ClienteDAO extends GenericDAO<Long, Cliente> {
//    public ClienteDAO(EntityManager entityManager) {
//        super(entityManager);
//    }
    
//    public Cliente getById(final Long id) {
//        return entityManager.find(Cliente.class, id);
//    }
}
