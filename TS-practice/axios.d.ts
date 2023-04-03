declare function axios(url: string): string;

interface IAxios {
    get: (url: string) => string;
    post: (url: string, data: any) => string;
}

declare const axios1: IAxios