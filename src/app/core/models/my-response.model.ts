
export interface MyResponse <T> {
  statusCode: 200 | 201;
  status: 'OK' | 'Created';
  message: string;
  reply: T
}