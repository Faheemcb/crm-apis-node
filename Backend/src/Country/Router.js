import express from 'express';
import controller from './Controller.js';

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          Country:
 *              type: object
 *              required:
 *                  - countryLabel
 *              properties:
 *                  countryLabel:
 *                      type: string
 *                      description: country name
 */

/**
 * @swagger
 * /api/v1/country:
 *  post:
 *      summary: Create new country
 *      description: This API is used to create a new country
 *      tags:
 *          - Country
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Country'
 *      responses:
 *          201:
 *              description: country created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Country'
 *          400:
 *              description: Bad request, check the request body
 */
router.post('/country', controller.createNewCountry); 

export default router;
