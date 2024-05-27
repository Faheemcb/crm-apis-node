import express from 'express';
import controller from './Controller.js';

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          NationalIdLabel:
 *              type: object
 *              required:
 *                  - nationalLabel
 *              properties:
 *                  nationalLabel:
 *                      type: string
 *                      description: national Id Label name
 */

/**
 * @swagger
 * /api/v1/nationalIdLabel:
 *  post:
 *      summary: Create new national Id Label
 *      description: This API is used to create a new national id label
 *      tags:
 *          - NationalIdLabel
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/NationalIdLabel'
 *      responses:
 *          201:
 *              description: NationalIdLabel created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NationalIdLabel'
 *          400:
 *              description: Bad request, check the request body
 */
router.post('/nationalIdLabel', controller.createNewNationalId); 

export default router;
