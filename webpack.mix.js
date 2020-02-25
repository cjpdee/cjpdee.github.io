const mix = require("laravel-mix");

mix.ts("./src/js/index.ts", "./index.js").sass(
    "./src/scss/index.scss",
    "./index.css"
);

mix.browserSync({
    proxy: "",
    server: "./",
    files: ["./**"]
});
