// criando um boilerplate webpack

const path = require('path'); // node utiliza o sistema de módulos CommonJS

module.exports = { // criando um objeto que será exportado para outros arquivos JavaScript. Contendo as configurações do webpack
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'JS'), // especificando o caminho da saída (onde será gerado). "resolve" é um método que torna um caminho de diretório absoluto. "path.resolve()" se adapta ao sistema utilizado e suas diferenças específicas
        filename: 'bundle.js' // especificando qual é o arquivo de saída (que será gerado)
    },
    module: { 
        rules: [{ // criando regras para a execução do webpack
            exclude: /node_modules/, // excluindo a pasta "node_modules" para que o webpack não a analise. Para evitar lentidão(node_modules contém muitos arquivos)
            test: /\.js$/, // dizendo ao webpack, qual o tipo de extensão de arquivo ele deverá analisar. Nesse caso, arquivos do tipo ".js"
            use: {
                loader: 'babel-loader', // qual loader será utilizado
                options: {
                    presets: ['@babel/env'] // qual preset será utilizado
                }
            }
        }, {
            test: /\.css$/, // dizendo ao webpack para ler arquivos do tipo .css
            use: ['style-loader', 'css-loader'] // utilizando as depêndencias para o css
        }]
    },
    devtool: 'source-map' // "source-map" é responsável por mapear o erro no arquivo em que o mesmo ocorreu. No bundle será jogado todo o script que será convertido em JavaScript antigo. "source-map" apontará para qual arquivo em específico o erro está
};
