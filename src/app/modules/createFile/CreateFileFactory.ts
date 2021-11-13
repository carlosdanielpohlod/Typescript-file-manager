import CreateFileController from "./CreateFileController";
import CreateFileService from "./CreateFileService";
import Repository from '../../repositories/implementation/File'
import FirebaseStorageImplementation from '../../provider/firebase/FirebaseStorageImplementation'
export default class CreateFileFactory{
    constructor(
        public createFileService : CreateFileService,
        public fileRepository : Repository
        ){}
    
    handle() : CreateFileController{
        this.createFileService = new CreateFileService(new Repository(),new FirebaseStorageImplementation())
        return new CreateFileController(this.createFileService)
    }
}