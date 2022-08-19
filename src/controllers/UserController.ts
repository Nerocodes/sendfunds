import { Response, Request } from 'express';

class UserController {
   async getAllUsers(req:Request, res:Response) {
    return res.json({
        message: 'Users fetched successfully',
        data: [],
     }).status(200);
   }
}

export default UserController;