module.exports = {
  // The code below fixes a weird error when trying to use
  // vue plugins. No idea what it does, found it over at:
  // https://github.com/posva/pinia/issues/675
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
  },
};
