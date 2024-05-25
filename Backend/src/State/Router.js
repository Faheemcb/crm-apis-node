import express from 'express';
import controller from './Controller.js';

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          State:
 *              type: object
 *              required:
 *                  - stateLabel
 *              properties:
 *                  stateLabel:
 *                      type: string
 *                      description: state name
 *                  country:
 *                      type: string
 *                      description: country id
 */

/**
 * @swagger
 * /api/v1/state:
 *  post:
 *      summary: Create new state
 *      description: This API is used to create a new state
 *      tags:
 *          - State
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/State'
 *      responses:
 *          201:
 *              description: state created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/State'
 *          400:
 *              description: Bad request, check the request body
 */
router.post('/state', controller.createNewState); 

export default router;
