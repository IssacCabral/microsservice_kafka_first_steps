import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class enrollment1661450113444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'enrollments',
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
                        name: 'students_id',
                        type: 'integer',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'courses_id',
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
                        name: 'student_courses_student_id_foreign',
                        columnNames: ['students_id'],
                        referencedTableName: 'students',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'courses_students_courses_id_foreign',
                        columnNames: ['courses_id'],
                        referencedTableName: 'courses',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('enrollments')
    }

}
