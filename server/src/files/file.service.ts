import {HttpException, Injectable,HttpStatus } from '@nestjs/common'
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

export enum FileType{
	AUDIO= 'audio',
	IMAGE='image'
}
@Injectable()
export class FileService{
createFile(type, file){
try{

}catch(e){
	throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
}
}

removeFile(fileName:string){

}
}