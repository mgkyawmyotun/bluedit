import { ContextType, Type } from '@nestjs/common';
import {
  HttpArgumentsHost,
  RpcArgumentsHost,
  WsArgumentsHost,
} from '@nestjs/common/interfaces';
import { GqlContextType } from '@nestjs/graphql';
import { Request } from 'express';
import { Session } from 'express-session';
export interface UserSession {
  user: string;
}
export interface GraphQLUserContext {
  getType<TContext extends string = GqlContextType>(): TContext;
  getRoot<T = any>(): T;
  getArgs<T = any>(): T;
  getContext<T = any>(): T;
  getInfo<T = any>(): T;
  setType<TContext extends string = ContextType>(type: TContext): void;
  getClass<T = any>(): Type<T>;
  getHandler(): Function;
  getArgByIndex<T = any>(index: number): T;
  switchToRpc(): RpcArgumentsHost;
  switchToHttp(): HttpArgumentsHost;
  switchToWs(): WsArgumentsHost;
  session: Session & UserSession;
  req: Request;
}
