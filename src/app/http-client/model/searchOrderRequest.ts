/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Peticion de busqueda de ordenes
 */
export interface SearchOrderRequest { 
    /**
     * Termino a buscar
     */
    searchTerm?: string;
    /**
     * Tipo de busqueda
     */
    searchType?: SearchOrderRequest.SearchTypeEnum;
}
export namespace SearchOrderRequest {
    export type SearchTypeEnum = 'NUMBER' | 'PRODUCT' | 'CLOSED';
    export const SearchTypeEnum = {
        NUMBER: 'NUMBER' as SearchTypeEnum,
        PRODUCT: 'PRODUCT' as SearchTypeEnum,
        CLOSED: 'CLOSED' as SearchTypeEnum
    };
}
