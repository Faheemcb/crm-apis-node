import express from 'express';
import controller from './Controller.js';

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          user:
 *              type: object
 *              required:
 *                  - firstName
 *                  - email
 *                  - userName
 *                  - password
 *                  - role
 *              properties:
 *                  firstName:
 *                      type: string
 *                      description: FirstName Of the User
 *                  lastName:
 *                      type: string
 *                      description: lastname Of the User
 *                  email:
 *                      type: string
 *                      description: email Of the User
 *                  phoneNo:
 *                      type: string
 *                      description: phone number Of the User
 *                  dob:
 *                      type: string
 *                      description: dob Of the User
 *                  userName:
 *                      type: string
 *                      description: username Of the User
 *                  password:
 *                      type: string
 *                      description: password Of the User
 *                  gender:
 *                      type: string
 *                      enum: [ 'MALE', 'FEMALE', 'OTHER']
 *                      description: gender Of the User
 *                  role:
 *                      type: string
 *                      description: role Of the User
 *                  subscriberId:
 *                      type: string
 */

/**
 * @swagger
 * /api/v1/user:
 *  post:
 *      summary: Create new user
 *      description: This API is used to create a new user
 *      tags:
 *          - User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/user'
 *      responses:
 *          201:
 *              description: user created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          400:
 *              description: Bad request, check the request body
 */
router.post('/user', controller.createuser); 

export default router;
