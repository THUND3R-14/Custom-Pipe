import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "getFileDetails" })
export class getFileDetails implements PipeTransform {
    transform(value: any, text: any) {
        if (text !== undefined) {         
            const fsize = text[0]['size'];
            if (fsize <= 5000000) {
                let fdata = text[0]['name'];
                fdata = fdata.split('.');
                let extension = fdata[fdata.length - 1];
                extension = extension === undefined ? 'Can not recognized file extension' : extension;
                return `{ fileName: '${fdata[0]}', fileExtension: '${extension}', fileSize: ${fsize} bytes }`
            }
            else {
                return 'Upload file upto to 5MB.'
            }
        }
        else {
            return 'No file uploaded!!'
        }
    }
}