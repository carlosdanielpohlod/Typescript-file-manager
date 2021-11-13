import IFile from '../../repositories/IFile'
import File from '../../entities/file'
import ICreateFileService from './ICreateFileService'
import ICreateFileDTORequest from './ICreateFileDTORequest'

export default class CreateFileService implements ICreateFileService{
    constructor(private repository : IFile, private driver : any){
     
    }
    async save(file : ICreateFileDTORequest){
        const newFile = new File(file.url, file.name)
        this.driver.save(newFile)
        this.repository.save(newFile)
    }
}