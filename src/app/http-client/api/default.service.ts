/**
 * OMS API
 * API for management of products and orders
 *
 *  
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Campaign } from '../model/campaign';
import { ErrorResponse } from '../model/errorResponse';
import { LoginRequest } from '../model/loginRequest';
import { Order } from '../model/order';
import { OrderStatus } from '../model/orderStatus';
import { Product } from '../model/product';
import { RankingOrderProfitRequest } from '../model/rankingOrderProfitRequest';
import { RankingOrderProfitResponse } from '../model/rankingOrderProfitResponse';
import { RankingProductRequest } from '../model/rankingProductRequest';
import { SearchOrderRequest } from '../model/searchOrderRequest';
import { SearchProductRequest } from '../model/searchProductRequest';
import { SearchProductResponse } from '../model/searchProductResponse';
import { User } from '../model/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DefaultService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Crear una promocion
     * 
     * @param campaign 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCampaign(campaign: Campaign, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createCampaign(campaign: Campaign, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createCampaign(campaign: Campaign, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createCampaign(campaign: Campaign, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (campaign === null || campaign === undefined) {
            throw new Error('Required parameter campaign was null or undefined when calling createCampaign.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/campaigns`,
            campaign,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Crear una orden
     * 
     * @param order 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOrder(order: Order, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createOrder(order: Order, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createOrder(order: Order, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createOrder(order: Order, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (order === null || order === undefined) {
            throw new Error('Required parameter order was null or undefined when calling createOrder.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/orders`,
            order,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Crear un producto
     * 
     * @param product 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createProduct(product: Product, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createProduct(product: Product, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createProduct(product: Product, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createProduct(product: Product, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling createProduct.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/products`,
            product,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Cancelar una promocion
     * 
     * @param id ID de la promocion
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCampaign(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCampaign(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCampaign(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCampaign(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCampaign.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/campaigns/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Cancelar una orden
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteOrder(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteOrder(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteOrder(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteOrder(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteOrder.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/orders/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Borrar un producto
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProduct(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteProduct(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteProduct(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteProduct(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteProduct.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/products/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtener todas las promociones
     * 
     * @param active Parametro para activar busqueda para promociones activas
     * @param startDate Parametro para buscar promociones con vigencia a partir de la fecha
     * @param endDate Parametro para buscar promociones con vigencia hasta la fecha
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCampaings(active?: boolean, startDate?: string, endDate?: string, observe?: 'body', reportProgress?: boolean): Observable<Campaign>;
    public getCampaings(active?: boolean, startDate?: string, endDate?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Campaign>>;
    public getCampaings(active?: boolean, startDate?: string, endDate?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Campaign>>;
    public getCampaings(active?: boolean, startDate?: string, endDate?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (active !== undefined && active !== null) {
            queryParameters = queryParameters.set('active', <any>active);
        }
        if (startDate !== undefined && startDate !== null) {
            queryParameters = queryParameters.set('startDate', <any>startDate);
        }
        if (endDate !== undefined && endDate !== null) {
            queryParameters = queryParameters.set('endDate', <any>endDate);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Campaign>(`${this.basePath}/campaigns`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtener detalles de una orden
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOrderDetails(id: number, observe?: 'body', reportProgress?: boolean): Observable<Order>;
    public getOrderDetails(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Order>>;
    public getOrderDetails(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Order>>;
    public getOrderDetails(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getOrderDetails.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Order>(`${this.basePath}/orders/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna un producto
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProduct(id: number, observe?: 'body', reportProgress?: boolean): Observable<Product>;
    public getProduct(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Product>>;
    public getProduct(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Product>>;
    public getProduct(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProduct.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Product>(`${this.basePath}/products/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna una lista con todos los productos disponibles
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProducts(observe?: 'body', reportProgress?: boolean): Observable<Array<Product>>;
    public getProducts(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Product>>>;
    public getProducts(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Product>>>;
    public getProducts(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<Product>>(`${this.basePath}/products`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtener informacion de una promocion
     * 
     * @param id ID de la promocion
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSpecificCampaing(id: number, observe?: 'body', reportProgress?: boolean): Observable<Campaign>;
    public getSpecificCampaing(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Campaign>>;
    public getSpecificCampaing(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Campaign>>;
    public getSpecificCampaing(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSpecificCampaing.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Campaign>(`${this.basePath}/campaigns/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ingresar al sistema
     * 
     * @param user 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loginUserOMS(user: LoginRequest, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public loginUserOMS(user: LoginRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public loginUserOMS(user: LoginRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public loginUserOMS(user: LoginRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling loginUserOMS.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<User>(`${this.basePath}/login`,
            user,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Modificar una promocion
     * 
     * @param campaign 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modifyCampaing(campaign: Campaign, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public modifyCampaing(campaign: Campaign, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public modifyCampaing(campaign: Campaign, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public modifyCampaing(campaign: Campaign, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (campaign === null || campaign === undefined) {
            throw new Error('Required parameter campaign was null or undefined when calling modifyCampaing.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/campaigns`,
            campaign,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Modificar status de orden
     * 
     * @param id 
     * @param status 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modifyOrderStatus(id: number, status: OrderStatus, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public modifyOrderStatus(id: number, status: OrderStatus, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public modifyOrderStatus(id: number, status: OrderStatus, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public modifyOrderStatus(id: number, status: OrderStatus, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling modifyOrderStatus.');
        }

        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling modifyOrderStatus.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/orders/${encodeURIComponent(String(id))}/status`,
            status,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Buscar ordenes en base a criterios
     * 
     * @param searchRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchOrder(searchRequest: SearchOrderRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<Order>>;
    public searchOrder(searchRequest: SearchOrderRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Order>>>;
    public searchOrder(searchRequest: SearchOrderRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Order>>>;
    public searchOrder(searchRequest: SearchOrderRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchRequest === null || searchRequest === undefined) {
            throw new Error('Required parameter searchRequest was null or undefined when calling searchOrder.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<Order>>(`${this.basePath}/orders/search`,
            searchRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Buscar ganancias de las ordenes en un rango
     * 
     * @param profitRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchOrderProfit(profitRequest: RankingOrderProfitRequest, observe?: 'body', reportProgress?: boolean): Observable<RankingOrderProfitResponse>;
    public searchOrderProfit(profitRequest: RankingOrderProfitRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RankingOrderProfitResponse>>;
    public searchOrderProfit(profitRequest: RankingOrderProfitRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RankingOrderProfitResponse>>;
    public searchOrderProfit(profitRequest: RankingOrderProfitRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (profitRequest === null || profitRequest === undefined) {
            throw new Error('Required parameter profitRequest was null or undefined when calling searchOrderProfit.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<RankingOrderProfitResponse>(`${this.basePath}/orders/profit`,
            profitRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Buscar productos con criterios definidos
     * 
     * @param searchProductRequest Peticion para buscar producto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchProduct(searchProductRequest: SearchProductRequest, observe?: 'body', reportProgress?: boolean): Observable<SearchProductRequest>;
    public searchProduct(searchProductRequest: SearchProductRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchProductRequest>>;
    public searchProduct(searchProductRequest: SearchProductRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchProductRequest>>;
    public searchProduct(searchProductRequest: SearchProductRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchProductRequest === null || searchProductRequest === undefined) {
            throw new Error('Required parameter searchProductRequest was null or undefined when calling searchProduct.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<SearchProductRequest>(`${this.basePath}/products/search`,
            searchProductRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Buscar productos ranqueados en base a criterios definidos
     * 
     * @param searchRankedProductRequest Peticion para buscar producto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchRankedProduct(searchRankedProductRequest: RankingProductRequest, observe?: 'body', reportProgress?: boolean): Observable<SearchProductResponse>;
    public searchRankedProduct(searchRankedProductRequest: RankingProductRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchProductResponse>>;
    public searchRankedProduct(searchRankedProductRequest: RankingProductRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchProductResponse>>;
    public searchRankedProduct(searchRankedProductRequest: RankingProductRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchRankedProductRequest === null || searchRankedProductRequest === undefined) {
            throw new Error('Required parameter searchRankedProductRequest was null or undefined when calling searchRankedProduct.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<SearchProductResponse>(`${this.basePath}/products/rank`,
            searchRankedProductRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Modificar un producto
     * 
     * @param product 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateProduct(product: Product, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateProduct(product: Product, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateProduct(product: Product, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateProduct(product: Product, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling updateProduct.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/products`,
            product,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
