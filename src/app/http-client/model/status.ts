/**
 * OMS API
 * API for management of products and orders
 * 
 */


export interface Status { 
    /**
     * Codigo de respuesta del API
     */
    statusCode: number;
    /**
     * Info, Warning, Error
     */
    severity: Status.SeverityEnum;
    /**
     * Mensaje descriptivo de la respuesta
     */
    statusDesc?: string;
}
export namespace Status {
    export type SeverityEnum = 'Info' | 'Warning' | 'Error';
    export const SeverityEnum = {
        Info: 'Info' as SeverityEnum,
        Warning: 'Warning' as SeverityEnum,
        Error: 'Error' as SeverityEnum
    };
}
