import { Request } from 'express';

export interface TypedRequestBodyParams<Params, ReqBody> extends Express.Request {
    body: ReqBody;
    params: Params;
}

export interface TypedRequestBody<T> extends Request {
    body: T;
}
