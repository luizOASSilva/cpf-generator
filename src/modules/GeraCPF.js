import ValidaCPF from "./ValidaCPF";

export default class CriaCPF {
    CriaCPF() {
        const cpfSemDigito = this.randomCPF();

        const valida = new ValidaCPF();

        const digito1 = valida.criaDigito(cpfSemDigito);
        const digito2 = valida.criaDigito(cpfSemDigito + digito1);

        const cpfCriado = cpfSemDigito + digito1 + digito2;

        const cpfFormatado = this.formataCPF(cpfCriado);

        return cpfFormatado;
    }

    randomCPF(min = 100000000, max = 999999999) {
       return String(Math.floor(Math.random() * (max - min) + min));
    }

    formataCPF(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }
}
