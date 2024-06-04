/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Feature
 */
export interface Feature {
    /**
     * 
     * @type {string}
     * @memberof Feature
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof Feature
     */
    select: boolean;
}

/**
 * Check if a given object implements the Feature interface.
 */
export function instanceOfFeature(value: object): value is Feature {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('select' in value) || value['select'] === undefined) return false;
    return true;
}

export function FeatureFromJSON(json: any): Feature {
    return FeatureFromJSONTyped(json, false);
}

export function FeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Feature {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'select': json['select'],
    };
}

export function FeatureToJSON(value?: Feature | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'select': value['select'],
    };
}
