const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['./src/js/index.js', './src/js/2.13/index.js'], // Точка входа для сборки проекта

    output: {
        filename: '[name].js', // Имя выходного файла сборки
        path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    },

    module: {
        rules: [
            {
                test: /\.css$/i, // Регулярное выражение для обработки файлов с расширением .css
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/js/index.html',
        }),

        new MiniCssExtractPlugin (),
    ],

    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
        open: true, // Автоматически открывать браузер
    },

    mode: 'development', // Режим сборки
};