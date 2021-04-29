import csvtojson from "csvtojson";
import { Database } from "../db/mongoDBSettings";
import { Utils } from "../utils/utils";
import { STATUS_CODE, STATUS_MESSAGE } from "../settings/settings";

const toJson = csvtojson();
const database = new Database();
const utils = new Utils();

/**
 * @name ProcessFileController
 * @description ProcessFileController class
 */
export class ProcessFileController {

  /**
   * @name processFile
   * @description Method for take the registers from CSV file and insert in Mongo
   * @param request 
   * @param response 
   * @returns Object with the operation result
   */
  public async processFile(request: any, response: any): Promise<any> {
    let file: any;
    let objectResponse: any;
    try {
      file = await toJson.fromFile(request.file.path);
      await database.startDatabase();
      const insertManyResult = await database.getSchema().insertMany(file);
      objectResponse = await utils.makeResponse(
        STATUS_CODE.SUCCESS,
        STATUS_MESSAGE.SUCCESS,
        insertManyResult.length
      );
    } catch (error) {
      console.log("error", error);
      objectResponse = await utils.makeResponse(
        STATUS_CODE.ERROR,
        STATUS_MESSAGE.ERROR,
        null
      );
    }
    return response.json(objectResponse);
  }
}
