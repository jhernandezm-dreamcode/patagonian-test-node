import { MongoMemoryServer } from "mongodb-memory-server";
import { Vehicle } from "../types/vehicle";
import mongoose from "mongoose";

/**
 * @name Database
 * @description Database class
 */
export class Database {
  /**
   * @name getSchema
   * @description method for create the mongodb schema
   * @returns mongodb model
   */
  public getSchema(): any {
    const vehicleSchema: any = new mongoose.Schema(Vehicle);
    return mongoose.model("vehicle", vehicleSchema);
  }

  /**
   * @name startDatabase
   * @description method for start mongodb databse
   */
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
    } catch (error) {
      console.log("error",error);
    }
  }

  /**
   * @name endDatabase
   * @description method for end the connection
   */
  public async endDatabase():Promise<void>{
    await mongoose.disconnect();
  }
}
