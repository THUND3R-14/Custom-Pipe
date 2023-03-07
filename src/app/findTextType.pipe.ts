import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "findTextType" })
export class findTxtType implements PipeTransform {
    transform(value: any, text: string) {
        const regex = new RegExp('^[a-zA-Z0-9]+$');
        const specialchr = new RegExp('^[.:;%#@_$/&*+-]+$');
        const num = new RegExp('^[0-9]+$');
        const decimal = new RegExp('^[-+]?[0-9]+\.[0-9]+$');

        if (text.toLowerCase() === 'true' || text.toLowerCase() === 'false') {
            return 'Boolean';
        }

        if (num.test(text)) {
            return 'Number';
        }

        if (decimal.test(text)) {
            return 'Decimal';
        }

        if (regex.test(text)) {
            return 'Alphanumeric';
        }

        if (specialchr.test(text)) {
            return 'Special characters';
        }
        return '';
    }
} 