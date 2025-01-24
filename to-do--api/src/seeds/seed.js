import { faker } from '@faker-js/faker';
import sequelize from '../config/db/database.js';
import Task from '../models/task.js';
import TaskStatus from '../models/enums/TaskStatus.js';

const seedTasks = async () => {
    try {
        await sequelize.authenticate();

        const taskCount = await Task.count();
        if (taskCount > 0) {
            console.log('Tasks already exist in the database. No seed required.');
            process.exit(0);
        }

        for (let i = 0; i < 5; i++) {
            await Task.create({
                title: faker.lorem.words(3),
                description: faker.lorem.sentences(2),
                status: faker.helpers.arrayElement([
                    TaskStatus.PENDING,
                    TaskStatus.IN_PROGRESS,
                    TaskStatus.COMPLETED
                ])
            });
        }

        console.log('Seed completed! 5 tasks inserted.');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedTasks();
