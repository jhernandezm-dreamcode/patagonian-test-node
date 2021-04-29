import csvtojson from "csvtojson";
import { Database } from "../db/mongoDBSettings";
import { Utils } from "../utils/utils";
import { STATUS_CODE, STATUS_MESSAGE } from "../settings/settings";

const database = new Database()
const schema = database.getSchema();

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
    const toJson = csvtojson();
    const utils = new Utils();
    let file: any;
    let objectResponse: any;
    if (request?.file === undefined || request?.file === null) {
      objectResponse = await utils.makeResponse(
        STATUS_CODE.NO_FILE,
        STATUS_MESSAGE.NO_FILE,
        null
      );
      return response.json(objectResponse);
    }

    if (
      request.query?.provider === undefined ||
      request.query?.provider === null
    ) {
      objectResponse = await utils.makeResponse(
        STATUS_CODE.NO_FILE,
        STATUS_MESSAGE.NO_PROVIDER,
        null
      );
      return response.json(objectResponse);
    }
    const providerName: string = request.query.provider;
    try {
      file = await toJson.fromFile(request.file.path);
      const allData: any = await processFileController.buildAllData(
        file,
        providerName
      );
      await database.startDatabase();
      const insertManyResult = await schema.insertMany(allData);
      await database.endDatabase();
      objectResponse = await utils.makeResponse(
        STATUS_CODE.SUCCESS,
        STATUS_MESSAGE.SUCCESS,
        insertManyResult.length
      );
    } catch (error) {
      console.log("error", error);
      await database.endDatabase();
      objectResponse = await utils.makeResponse(
        STATUS_CODE.ERROR,
        STATUS_MESSAGE.ERROR,
        null
      );
    }
    return response.json(objectResponse);
  }

  private async buildAllData(data: any[], providerName): Promise<any> {
    for (const iterator of data) {
      iterator.provider = providerName;
    }
    return data;
  }
}

const processFileController = new ProcessFileController();
