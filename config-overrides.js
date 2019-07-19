const colors = {
    primary: '#285299',
    secondary: '#5DA5BA',
    complementary: '#D5CC8B',
    white: '#fff',
};

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': colors.primary,
            '@link-color': colors.complementary,
            '@layout-body-background': colors.white,
            '@layout-sider-background': colors.white,
        },
    }),
);
