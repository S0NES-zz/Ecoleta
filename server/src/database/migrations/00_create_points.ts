import Knex from 'knex';

export async function up(knex: Knex){
    //criar tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('Image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex){
<<<<<<< HEAD
    //voltar atras(deletar a tabela)
    return knex.schema.dropTable('point');
}
=======
    return knex.schema.dropTable('points');
}
>>>>>>> e929844c7f65ca3d9fe9de1c6ee88dc184b59b1d
