import mongoose from "mongoose";

export const connectDB = async () => {
	const mongoURI = 'mongodb+srv://neelabhsharma2002:caUcjuuCb4B7HMZ@cluster0.jgfff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
	try {
		const conn = await mongoose.connect(mongoURI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};
