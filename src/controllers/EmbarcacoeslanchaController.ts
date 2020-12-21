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
    
     return response.status(201).json(embarcacoeslancha);
  }
};