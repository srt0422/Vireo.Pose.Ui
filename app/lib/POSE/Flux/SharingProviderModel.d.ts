

declare class SharingProviderModel extends Backbone.Model implements ISharingProviderModelProps {
    Name: string;
    UserId: number;
    AuthToken: string;
    ExpirationDate: Date;
    constructor(attributes: ISharingProviderModelProps, options: any);
}
