import express from 'express';
import controller from './Controller.js';

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          City:
 *              type: object
 *              required:
 *                  - cityLabel
 *                  - stateId
 *                  - countryId
 *              properties:
 *                  cityLabel:
 *                      type: string
 *                      description: city name
 *                  stateId:
 *                      type: string
 *                      description: state id
 *                  countryId:
 *                      type: string
 *                      description: country id
 */

/**
 * @swagger
 * /api/v1/city:
 *  post:
 *      summary: Create new city
 *      description: This API is used to create a new city
 *      tags:
 *          - City
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/City'
 *      responses:
 *          201:
 *              description: City created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/City'
 *          400:
 *              description: Bad request, check the request body
 */
router.post('/city', controller.createNewCity); 

export default router;
