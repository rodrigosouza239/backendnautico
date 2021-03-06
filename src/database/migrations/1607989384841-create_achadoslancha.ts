import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createAchadoslancha1607989384841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
           //criação da minha tabelas do banco de dados 
           await queryRunner.createTable(new Table({
            name : 'achadoslancha',
            columns: [
               {
                   name: 'id',
                   type: 'integer',
                   unsigned: true,
                   isPrimary: true, 
                   isGenerated: true,
                   generationStrategy: 'increment',
                },
                {
                    name: 'date',
                    type: 'varchar'
                },
                {
                    name: 'obs',
                    type: 'varchar'
                },
                {
                    name: 'entreguei',
                    type: 'varchar'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'rg',
                    type: 'varchar'
                },
                
            ]
        }))

        //fechamento da coluna
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('achadoslancha');
    }

}
