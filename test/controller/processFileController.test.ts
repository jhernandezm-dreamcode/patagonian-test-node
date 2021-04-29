import { Database } from "../../src/db/mongoDBSettings";
import csvtojson from "csvtojson";
import { toJsonMock, request } from "../config/commonMocks";
import {EXPECTED_RESPONSE} from '../config/expectedResponse'
import { ProcessFileController } from "../../src/controllers/processFileController";

const toJson = csvtojson();
const mongoDb = new Database();
const processFileController = new ProcessFileController();

describe("test", async () => {
  it("test", async () => {
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
});
