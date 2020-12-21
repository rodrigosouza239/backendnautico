
import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import AvariasLancha from '../models/AvariasLancha';

export default {
  async create( request: Request, response: Response ) {
    const {
      obs,
     } = request.body;
    
     const avariaslanchaRepository = getRepository(AvariasLancha);
    
     const avariaslancha = avariaslanchaRepository.create({
      obs
     });
     await avariaslanchaRepository.save(avariaslancha);
    
     return response.status(201).json(avariaslancha);
  }
};