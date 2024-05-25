import express from 'express';
import controller from './Controller.js';

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          District:
 *              type: object
 *              required:
 *                  - districtLabel
 *                  - stateId
 *              properties:
 *                  districtLabel:
 *                      type: string
 *                      description: district name
 *                  stateId:
 *                      type: string
 *                      description: state id
 */

/**
 * @swagger
 * /api/v1/district:
 *  post:
 *      summary: Create new district
 *      description: This API is used to create a new district
 *      tags:
 *          - District
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/District'
 *      responses:
 *          201:
 *              description: district created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/District'
 *          400:
 *              description: Bad request, check the request body
 */
router.post('/district', controller.createNewDistrict); 

export default router;
