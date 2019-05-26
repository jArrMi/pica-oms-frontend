/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Peticion de busqueda de productos
 */
export interface SearchProductRequest { 
    /**
     * Termino a buscar
     */
    searchTerm?: string;
    /**
     * Tipo de busqueda
     */
    searchType?: SearchProductRequest.SearchTypeEnum;
}
export namespace SearchProductRequest {
    export type SearchTypeEnum = 'CODE' | 'NAME' | 'SPECTACLE' | 'DESCRIPTION';
    export const SearchTypeEnum = {
        CODE: 'CODE' as SearchTypeEnum,
        NAME: 'NAME' as SearchTypeEnum,
        SPECTACLE: 'SPECTACLE' as SearchTypeEnum,
        DESCRIPTION: 'DESCRIPTION' as SearchTypeEnum
    };
}
