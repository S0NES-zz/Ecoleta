import Knex from 'knex';

export async function up(knex: Knex) {
    //criar tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('Image').notNullable();
        table.string('title').notNullable();
    });
};

export async function down(knex: Knex) {
    //voltar atras(deletar a tabela)
    return knex.schema.dropTable('items');
};
