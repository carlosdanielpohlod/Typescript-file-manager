import ICreateFileDTORequest from "./ICreateFileDTORequest";
import ICreateFileService from "./ICreateFileService";
import { Request, Response } from 'express';
export default class CreateFileController {
    constructor(private service : ICreateFileService) { }
    
    handle(req : Request, response : Response) {

        this.service.save(<ICreateFileDTORequest> {... req.body});
        return response.status(200).send('done');
    }
}