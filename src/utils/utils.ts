export class Utils {
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
