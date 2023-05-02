"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersProcesses1599205172957 = void 0;
class UsersProcesses1599205172957 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE status_type AS ENUM ('active', 'processing', 'finished', 'failed')`);
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS users_processes (
        id SERIAL PRIMARY KEY NOT NULL,
        status status_type NOT NULL DEFAULT 'active',
        start_time TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
        end_time TIMESTAMP,
        process_run_id text NOT NULL,
        duration int,
        events_source text,
        logs_source text,
        user_id int NOT NULL,
        process_id int NOT NULL,
        company_id int NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (company_id) REFERENCES companies (id),
        FOREIGN KEY (process_id) REFERENCES processes (id))`);
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE IF EXISTS users_processes');
        await queryRunner.query('DROP TYPE IF EXISTS status_type');
    }
}
exports.UsersProcesses1599205172957 = UsersProcesses1599205172957;
//# sourceMappingURL=1599205172957-UsersProcesses.js.map