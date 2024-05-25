import express from 'express';
import controller from './Controller.js';

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          Subscriber:
 *              type: object
 *              required:
 *                  - subscriberType
 *                  - countryId
 *                  - stateId
 *                  - districtId
 *                  - cityId
 *                  - nationalLabelId
 *              properties:
 *                  subscriberType:
 *                      type: string
 *                      enum: [ 'INDIVIDUAL', 'COMPANY']
 *                      description: Type of the subscriber
 *                  legalName:
 *                      type: string
 *                      description: Legal name of the subscriber
 *                  address:
 *                      type: string
 *                      description: Address of the subscriber
 *                  place:
 *                      type: string
 *                      description: Place of the subscriber
 *                  phone:
 *                      type: string
 *                      description: Phone number of the subscriber
 *                  logoURL:
 *                      type: string
 *                      description: Logo URL of the subscriber
 *                  website:
 *                      type: string
 *                      description: Website of the subscriber
 *                  taxNumber:
 *                      type: string
 *                      description: Tax number of the subscriber
 *                  nationalLabelIdValue:
 *                      type: string
 *                      description: National label ID value of the subscriber
 *                  panNo:
 *                      type: string
 *                      description: PAN number of the subscriber
 *                  countryId:
 *                      type: string
 *                      description: ObjectId of the country
 *                  stateId:
 *                      type: string
 *                      description: ObjectId of the state
 *                  districtId:
 *                      type: string
 *                      description: ObjectId of the district
 *                  cityId:
 *                      type: string
 *                      description: ObjectId of the city
 *                  nationalLabelId:
 *                      type: string
 *                      description: ObjectId of the national label 
 */

/**
 * @swagger
 * /api/v1/subscriber:
 *  post:
 *      summary: Create new subscriber
 *      description: This API is used to create a new subscriber
 *      tags:
 *          - Subscriber
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Subscriber'
 *      responses:
 *          201:
 *              description: Subscriber created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Subscriber'
 *          400:
 *              description: Bad request, check the request body
 */
router.post('/subscriber', controller.createsubscriber); // Create new subscriber

export default router;
