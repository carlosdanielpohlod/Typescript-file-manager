import File from '../entities/file'
export default interface FileInterface {
    save(file: File): Promise<void>;
}