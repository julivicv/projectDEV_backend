export interface ResponseServer<T> {
  statusCode: number;
  body: T;
}
