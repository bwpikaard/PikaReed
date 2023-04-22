export const fetcher = async (...args: any[]): Promise<any> => fetch(...args).then(async res => res.json());
