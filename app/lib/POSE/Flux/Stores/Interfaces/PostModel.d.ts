// /// <reference path="isharingprovidercollection.ts" />
//
// declare class PostModel extends Backbone.Model {
//     Content: string;
//     SharingProviders: ISharingProviderCollection;
//     url: string;
//     initialize(): void;
//     onChange(model: any, options: any): void;
//     setContent(value: string): void;
//     sharingProviderExists(name: string): boolean;
//     tryAddSharingProvider(name: string): void;
//     addTwitterSharingProvider(): void;
//     addFacebookSharingProvider(): void;
//     addLinkedInSharingProvider(): void;
//     addNewSharingProvider(name: string): SharingProviderModel;
//     removeSharingProvider(sharingProviderName: any): void;
//     getSharingProviderId(sharingProviderName: any): string;
//     getSharingProvider(sharingProviderName: any): SharingProviderModel;
//     toAddMutation(): AddPostMutation;
//     getFragment(): any;
//     toJSON(): any;
// }
