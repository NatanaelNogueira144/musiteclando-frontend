export default class ValidationError extends Error {
    _errors: {[key: string]: string}

    constructor(
        errors: {[key: string]: string}, 
        message: string = 'Erros de validação! Verifique os campos.'
    ) {
        super(message)
        this.name = "ValidationError"
        this._errors = errors
    }

    getErrors() {
        return this._errors
    }
}