import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import Embarcacoesjetski from '../models/Embarcacoesjetski';


export default {
  async create( request: Request, response: Response ) {
    const {
      name,
      proprietario,
      marca,
      modelo,
      ano,
      comprimentototal,
      motor,
      combustivel,
     } = request.body;
    
     const embarcacoesjetskiRepository = getRepository(Embarcacoesjetski);
    
     if(!request.useMaster){
      return response.status(401).json({error: "Somente Adminstradores podem criar embarcações!"})
     }
    
     const embarcacoesjetski = embarcacoesjetskiRepository.create({
      name,
      proprietario,
      marca,
      modelo,
      ano,
      comprimentototal,
      motor,
      combustivel,
     });
     await embarcacoesjetskiRepository.save(embarcacoesjetski);
    
     return response.status(201).json(embarcacoesjetski);
  }
};
