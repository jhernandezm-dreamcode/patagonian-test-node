import { Database } from "../../src/db/mongoDBSettings";
import csvtojson from "csvtojson";
import { toJsonMock, request } from "../config/commonMocks";
import {EXPECTED_RESPONSE,BAD_RESPONSE} from '../config/expectedResponse'
import { ProcessFileController } from "../../src/controllers/processFileController";

const toJson = csvtojson();
const mongoDb = new Database();
const processFileController = new ProcessFileController();

describe("ProcessFileController", async () => {
  it("Success response", async () => {
    const jsonMock: any = toJsonMock;
    const toJsonFrom: any = jest
      .spyOn(toJson, "fromFile")
      .mockReturnValueOnce(jsonMock);
    const response: any = await processFileController.processFile(request, {
      json: () => {
        return { statusCode: 200, message: "SUCCESS", data: 1000 };
      },
    });
    expect(response).toEqual(EXPECTED_RESPONSE.EXPECTED_RESPONSE_1);
    toJsonFrom.mockRestore();
  });

  it("Bad response", async () => {
    const response: any = await processFileController.processFile(request, {
      json: () => {
        return { statusCode: 500, message: "ERROR", data: null };
      },
    });
    expect(response).toEqual(BAD_RESPONSE.BAD_RESPONSE_1);
  });

  it("Bad response file is null", async () => {
    request.file = null
    const response: any = await processFileController.processFile(request, {
      json: () => {
        return { statusCode: 400, message: "Please choose a file", data: null };
      },
    });
    expect(response).toEqual(BAD_RESPONSE.BAD_RESPONSE_2);
  });
});
