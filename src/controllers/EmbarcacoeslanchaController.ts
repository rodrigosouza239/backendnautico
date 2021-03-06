import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import Embarcacoeslancha from '../models/Embarcacoeslancha';


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
    
     const embarcacoeslanchaRepository = getRepository(Embarcacoeslancha);
    
    if(!request.useMaster){
      return response.status(401).json({error: "Somente Adminstradores podem criar embarcações!"})
    }
    
     const embarcacoeslancha = embarcacoeslanchaRepository.create({
      name,
      proprietario,
      marca,
      modelo,
      ano,
      comprimentototal,
      motor,
      combustivel,
     });
     await embarcacoeslanchaRepository.save(embarcacoeslancha);

     console.log(request.useMaster)
    
     return response.status(201).json(embarcacoeslancha);
  }
};
