import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
    projectId: '20zg91hp',
    dataset: 'production',
    apiVersion: '2024-01-06',
    useCdn: false, // useCdn is used to disable edge cases
};

const client = createClient(config);

export default client;