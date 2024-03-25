const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development', // Режим сборки
    entry: './js/index.js', // Точка входа для сборки проекта

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
            {
                test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './js/index.pug' ,
        }),

        new MiniCssExtractPlugin (),
        new CleanWebpackPlugin (),

    ],

    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
        open: true, // Автоматически открывать браузер
    },


};