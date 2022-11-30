const path=require('path')
module.exports={
    mode:"development",
    entry:'./src/App.js',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"output.js",   
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        compress:true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}