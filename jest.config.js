module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
    ],

    transform: {
        '^.+\\.vue$': 'vue-jest',
        ".*\\.(js)$": "babel-jest",
    },

    transformIgnorePatterns: [
        '/node_modules/(?!(@babel/runtime-corejs2)).+\\.js$',
    ],

    preset: '@vue/cli-plugin-unit-jest'
};
