import { Container, type Resolver } from '@specfocus/spec-focus.ioc';
import { type Response } from 'express';

const create = (res: Response) => new Container(res.locals);

export const register = (resolver: Resolver) => Container.push(resolver);

export const unregister = (resolver: Resolver) => Container.pop(resolver);

export default create;