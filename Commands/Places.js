'use strict';
/*                          _       _
 *__      _____  __ ___   ___  __ _| |_ ___
 *\ \ /\ / / _ \/ _` \ \ / / |/ _` | __/ _ \
 * \ V  V /  __/ (_| |\ V /| | (_| | ||  __/
 *  \_/\_/ \___|\__,_| \_/ |_|\__,_|\__\___|
 *
 * Copyright © 2016 Weaviate. All rights reserved.
 * LICENSE: https://github.com/weaviate/weaviate/blob/master/LICENSE
 * AUTHOR: Bob van Luijt (bob@weaviate.com)
 * See www.weaviate.com for details
 * See package.json for author and maintainer info
 * Contact: @weaviate_iot / yourfriends@weaviate.com
 */

/** Class Commands_Places */
module.exports = class Commands_Places { // Class: Commands_{resources.className}

    /**
     * Constructor for this Command
     * @param {object} req  - The request
     * @param {object} res  - The response
     * @param {object} next - Next() function
     */
    constructor(req, res, next) {
        this.req  = req;
        this.res  = res;
        this.next = next;
    }

    /**
     * Deletes a place.
     * @param {object} commandAttributes  - All attributes needed to exec the command
     * @return {promise} Returns a promise with the correct object
     */
    getDelete(commandAttributes) {
        return new Promise((resolve, reject) => {
            // resolve with kind and token
            resolve({});
        });
    }

    /**
     * Returns a particular place data.
     * @param {object} commandAttributes  - All attributes needed to exec the command
     * @return {promise} Returns a promise with the correct object
     */
    getGet(commandAttributes) {
        return new Promise((resolve, reject) => {
            // resolve with kind and token
            resolve({
                id: '12345-qwerty',
                name: 'place name'
            });
        });
    }

    /**
     * Registers a new place.
     * @param {object} commandAttributes  - All attributes needed to exec the command
     * @return {promise} Returns a promise with the correct object
     */
    getInsert(commandAttributes) {
        return new Promise((resolve, reject) => {
            // resolve with kind and token
            resolve({
                id: '12345-qwerty',
                name: 'place name'
            });
        });
    }

    /**
     * Lists user's places (homes).
     * @param {object} commandAttributes  - All attributes needed to exec the command
     * @return {promise} Returns a promise with the correct object
     */
    getList(commandAttributes) {
        return new Promise((resolve, reject) => {
            // resolve with kind and token
            resolve({
                kind: 'weave#placesListResponse',
                pageInfo: {
                    totalResults: 1,
                    resultPerPage: 1,
                    startIndex: 1
                },
                tokenPagination: {
                    nextPageToken: '12345-qwerty',
                    previousPageToken: 'qwerty-12345'
                },
                places: [{
                    id: '12345-qwerty',
                    name: 'place name'
                }]
            });
        });
    }

    /**
     * Updates a place. This method supports patch semantics.
     * @param {object} commandAttributes  - All attributes needed to exec the command
     * @return {promise} Returns a promise with the correct object
     */
    getPatch(commandAttributes) {
        return new Promise((resolve, reject) => {
            // resolve with kind and token
            resolve({
                id: '12345-qwerty',
                name: 'place name'
            });
        });
    }

    /**
     * Updates a place.
     * @param {object} commandAttributes  - All attributes needed to exec the command
     * @return {promise} Returns a promise with the correct object
     */
    getUpdate(commandAttributes) {
        return new Promise((resolve, reject) => {
            // resolve with kind and token
            resolve({
                id: '12345-qwerty',
                name: 'place name'
            });
        });
    }

};
