import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class purchase1661359684803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'purchases',
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
                        name: 'customers_id',
                        type: 'integer',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'products_id',
                        type: 'integer',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'customer_products_customer_id_foreign',
                        columnNames: ['customers_id'],
                        referencedTableName: 'customers',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'customer_products_product_id_foreign',
                        columnNames: ['products_id'],
                        referencedTableName: 'products',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('purchases')
    }

}
