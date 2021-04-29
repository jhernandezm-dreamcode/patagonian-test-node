/**
 * @name Utils
 * @description Utils class
 */
export class Utils {
  /**
   * @name makeResponse
   * @description method for build a response
   * @param statusCode
   * @param message
   * @param data
   * @returns an object with the parameter
   */
  public makeResponse(
    statusCode: number,
    message: string,
    data: any
  ): Promise<any> {
    const response: any = {
      statusCode,
      message,
      data,
    };
    return response;
  }
}
