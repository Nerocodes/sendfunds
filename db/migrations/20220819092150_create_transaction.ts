import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('transactions', (table) => {
        table.increments('id');
        table.string('account_number').notNullable();
        table.enum('transaction_type', [
            'credit',
            'debit'
        ]).notNullable();
        table.float('amount').notNullable();
        table.float('old_balance').notNullable();
        table.float('new_balance').notNullable();
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

