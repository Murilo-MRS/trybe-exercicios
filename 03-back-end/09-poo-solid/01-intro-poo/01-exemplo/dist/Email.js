"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    constructor(from, to, subject, message) {
        this._from = from;
        this._to = to;
        this._message = message;
        this._subject = subject;
    }
    set subject(newSubject) {
        if (newSubject.length <= 40)
            this._subject = newSubject;
    }
    get subject() {
        return this._subject;
    }
    get from() { return this._from; }
    get to() { return this._to; }
    get content() {
        return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
    }
}
exports.default = Email;
