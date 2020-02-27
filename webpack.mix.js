const mix = require("laravel-mix");

mix.js("./src/js/index.js", "./index.js").sass(
    "./src/scss/index.scss",
    "./index.css"
);

mix.browserSync({
    proxy: "",
    server: "./",
    files: ["./**"]
});
