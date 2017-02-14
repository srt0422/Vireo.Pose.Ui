// ﻿
// var requireConfig;
//
// define([], function () {
//     requireConfig = {};
//
//     requireConfig.pose = "lib/pose/components/";
//
//     requireConfig.html = "lib/html/components/";
//
//     requireConfig.poseUi = requireConfig.pose + "presentation/";
//
//     requireConfig.poseData = requireConfig.pose + "data/";
//
//     requireConfig.poseFlux = requireConfig.pose + "flux/";
//
//     requireConfig.lib = "../../../../../Scripts/";
//     //\Areas\Sharing\Content\pose - sharing\js\lib\mainConfig.ts
//     //By default load any module IDs from js/lib
//     requireConfig.baseUrl = '/Areas/Sharing/Content/pose-sharing/js/';
//     //except, if the module ID starts with "app",
//     //load it from the js/app directory. paths
//     //config is relative to the baseUrl, and
//     //never includes a ".js" extension since
//     //the paths config could be for a directory.
//     requireConfig.paths = {
//         "React": requireConfig.lib + "react/react-with-addons",// "node_modules/react/dist/react-with-addons",
//         "ReactDOM": requireConfig.lib + "react/react-dom",
//         "Relay": "node_modules/react-relay/dist/relay",
//         "react-router": "node_modules/react-router/umd/ReactRouter",
//         "backbone.lib": "node_modules/exoskeleton/exoskeleton",
//         "backbone": requireConfig.lib + "backbone.custom",
//         "underscore": requireConfig.lib + "underscore",
//         "jquery": requireConfig.lib + "jquery-1.10.2",
//
//         //components
//         "poser": requireConfig.poseUi + "poser",
//
//         //data
//         "AddSharingProviderMutation": requireConfig.poseData + "Mutations/AddSharingProviderMutation",
//         "AddPostMutation": requireConfig.poseData + "Mutations/AddPostMutation",
//
//         //routing
//         "SharingRoute": requireConfig.poseData + "Routes/SharingRoute",
//
//         //@*flux *@
//         "SharingProviderModel": requireConfig.poseFlux + "SharingProviderModel",
//         "SharingProviderCollection": requireConfig.poseFlux + "SharingProviderCollection",
//         "PostModel": requireConfig.poseFlux + "PostModel",
//         "PostStore": requireConfig.poseFlux + "Stores/PostStore",
//
//         //@*ui *@
//
//         //@*html helpers*@
//
//         "BootstrapContainerLayout": requireConfig.html + "BootstrapContainerLayout",
//         "UnorderedListComponent": requireConfig.html + "UnorderedListComponent",
//
//         //@*sharing *@
//         "SocialProviders": requireConfig.pose + "SocialProviders",
//
//         "SocialMediaOption": requireConfig.pose + "Presentation/SocialMediaOption",
//
//         "SocialMediaSelectorComponent": requireConfig.pose + "Presentation/SocialMediaSelectorComponent",
//         "SharingInputTypeComponent": requireConfig.pose + "Presentation/SharingInputTypeComponent",
//         "SharingContentComponent": requireConfig.pose + "Presentation/SharingContentComponent",
//
//         "Poser": requireConfig.pose + "Presentation/Poser",
//
//         "SharingComponent": requireConfig.pose + "Presentation/SharingComponent",
//
//         //@* Authentication *@
//
//         "OAuth": "node_bundles/oauth",
//         "SocialMediaAuthentiationBase": requireConfig.pose + "Presentation/SocialMedia/SocialMediaAuthentiationBase",
//
//         //@* twitter *@
//         "TwitterLoginFlow": requireConfig.pose + "Presentation/SocialMedia/Twitter/TwitterLoginFlow",
//         "TwitterAuthentication": requireConfig.pose + "Presentation/SocialMedia/Twitter/TwitterAuthentication",
//
//         //@*facebook *@
//         "FacebookAuthentication": requireConfig.pose + "Presentation/SocialMedia/Facebook/FacebookAuthentication",
//         "FacebookSdk": requireConfig.pose + "Presentation/SocialMedia/Facebook/FacebookSdk",
//
//         //linkedin
//         "LinkedInSdk": requireConfig.pose + "Presentation/SocialMedia/LinkedIn/LinkedInSdk",
//
//         "SocialAuth": requireConfig.pose + "Presentation/SocialMedia/SocialAuth",
//
//         "App": requireConfig.pose + "App",
//
//         //@*routing *@
//         "Routes": requireConfig.pose + "Routing/Enums/Routes",
//         "AppRouter": requireConfig.pose + "Routing/AppRouter"
//     };
//
//     requireConfig.map = {
//         "*": {
//             "react": "React",
//             "react-dom": "ReactDOM"
//         }
//     };
//
//     return requireConfig;
//
//     //requireConfig.shim = {
//     //    "react-router": {
//     //        deps: [
//     //            "babel-runtime/helpers/interop-require-default",
//     //            "core-js/library",
//     //        ],
//     //        exports: "module.exports"
//     //    },
//     //    "core-js/library": {
//     //        deps: ['./shim',
//     //            './modules/core.dict',
//     //            './modules/core.get-iterator-method',
//     //            './modules/core.get-iterator',
//     //            './modules/core.is-iterable',
//     //            './modules/core.delay',
//     //            './modules/core.function.part',
//     //            './modules/core.object.is-object',
//     //            './modules/core.object.classof',
//     //            './modules/core.object.define',
//     //            './modules/core.object.make',
//     //            './modules/core.number.iterator',
//     //            './modules/core.string.escape-html',
//     //            './modules/core.string.unescape-html',
//     //            './modules/core.log',
//     //            './modules/$.core'
//     //        ],
//     //        exports: "module.exports"
//     //    }
//     //};
// });
