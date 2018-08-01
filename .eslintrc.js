module.exports = {
    extends: ['plugin:jest/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
    },
    env: {
        es6: true,
        commonjs: true,
        jest: true,
        node: true
    },
    globals: {
        spyOn: true
    },
    plugins: ['babel', 'import', 'flowtype', 'jest']
};
