import IFile from '../IFile';
import File from '../../entities/file'
export default class fileRepository implements IFile{
    save(file: File): Promise<void> {
        throw new Error("Method not implemented.");
    }
}