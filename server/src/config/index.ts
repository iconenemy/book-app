import { AppDataSource } from './data.source';

const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log('PostgreSQL Connected...');
    } catch (err: any) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;
