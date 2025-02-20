import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: "w21gcfb5",
    dataset: "production",
    apiVersion: "2024-11-01",
    useCdn: false,
});