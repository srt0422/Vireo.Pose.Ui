/// <reference types="backbone" />
import * as Backbone from "backbone";
import ISharingProviderModelProps from "./Interfaces/ISharingProviderModelProps";
export declare class SharingProviderModel extends Backbone.Model {
    Name: string;
    UserId: number;
    AuthToken: string;
    ExpirationDate: Date;
    constructor(attributes: ISharingProviderModelProps, options: any);
    setAuthToken(authToken: string): void;
    setName(name: string): void;
    setUserId(userId: string): void;
    setAuthSecret(authSecret: string): void;
    setExpirationDate(expiresIn: number): void;
}
export default SharingProviderModel;
