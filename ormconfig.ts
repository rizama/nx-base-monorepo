import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db_nest_typeorm',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
    migrations: ['dist/apps/nest-typeorm/src/db/migrations/*.js'],
    cli: {
        migrationsDir: 'apps/nest-typeorm/src/db/migrations'
    }
}

export default config;