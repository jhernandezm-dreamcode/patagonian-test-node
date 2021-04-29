import { MongoMemoryServer } from "mongodb-memory-server";
import { Vehicle } from "../types/vehicle";
import mongoose from "mongoose";

export class Database {

  public getSchema(): any {
    let vehicleSchema: any = new mongoose.Schema(Vehicle);
    return mongoose.model("vehicle", vehicleSchema);
  }

  public async startDatabase(): Promise<void> {
    try {
      const mongoServer = new MongoMemoryServer();
      const uri = await mongoServer.getUri();
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      console.log("DB Connected");
    } catch (error) {
      console.log("error");
    }
  }
}
