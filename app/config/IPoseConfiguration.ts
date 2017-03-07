

export interface IPoseConfiguration {
    SharingUrl?: string;
    FacebookAppId?: string;
    Twitter: {
        consumerKey: string,
        consumerSecret: string
    }
}

export default IPoseConfiguration;
