import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('accounts', (table) => {
        table.increments('id');
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
        table.string('account_number').unique().notNullable();
        table.enum('account_type', [
            'savings',
            'current',
            'fixed'
        ]).defaultTo('savings').notNullable();
        table.float('account_balance').defaultTo(0.00);
        table.enum('status', [
            'active',
            'pending',
            'closed'
        ]).defaultTo('active');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('accounts');
}

