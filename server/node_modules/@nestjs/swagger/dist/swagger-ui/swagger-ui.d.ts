import { OpenAPIObject, SwaggerCustomOptions } from '../interfaces';
export declare function buildSwaggerInitJS(swaggerDoc: OpenAPIObject, customOptions?: SwaggerCustomOptions): string;
export declare const swaggerAssetsAbsoluteFSPath: any;
export declare function buildSwaggerHTML(baseUrl: string, swaggerDoc: OpenAPIObject, customOptions?: SwaggerCustomOptions): string;
