import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export async function hello(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Go Serverless v2.0! Your function executed successfully!",
      context,
      event,
    }),
  };
}
