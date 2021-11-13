import ICreateFileDTORequest from "./ICreateFileDTORequest";

export default interface ICreateFileService {
    save(file: ICreateFileDTORequest): Promise<void>;
}