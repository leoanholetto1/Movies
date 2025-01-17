import { request } from "express";
import FilmeDAL from "../DAL/FilmeDAL.js";

const dal = new FilmeDAL();

export default class FilmesController {

    //http://localhost:8081/insere-filme
    insereFilmes(request, response){
        dal.conectar();
        let filmes = request.body;
        for (let filme of filmes) {
            dal.inserir(filme);
        }
        response.status(200).send({ msg:"Filmes inseridos!", sucesso: true });
    }

    //http://localhost:8081/retornaGeneros
    async retornaGenero(request,response){
        let gen = await dal.retornaGeneros();
        console.log(gen)
        response.status(200).send(gen);
    }
    
    //http://localhost:8081/buscaFlexivel?filtro=action
    async buscaFlexivel(request,response){
        let gen = await dal.buscaFlexivel(request.query.filtro);
        console.log(gen)
        response.status(200).send(gen);
    }
    
    //http://localhost:8081/buscaGeneros
    async buscaGeneros(request,response){
        let gen = await dal.buscaGeneros(request.body.filtro);
        console.log(gen)
        response.status(200).send(gen);
    }
}