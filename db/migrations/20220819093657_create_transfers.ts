import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tranfers', (table) => {
        table.increments('id');
        table.string('from_account_number').notNullable();
        table.string('to_account_number').notNullable();
        table.float('amount').notNullable();
        table.enum('status', [
            'failed',
            'pending',
            'successful'
        ]).defaultTo('pending');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('transactions');
}

