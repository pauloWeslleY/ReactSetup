// module.exports = {
//    "presets": ["next/babel"],
//    "plugins": [[styled-components], {"ssr": true}]
// };

const getPresets = (options = {}) => ({
   presets: options.presets || ['next/babel'],
   plugins: [
      ['styled-components', { ssr: true }],
      ...(options.plugins || []),
      "inline-react-svg"
   ],
})

module.exports = {
   env: {
      production: getPresets({
         plugins: [
            ['react-remove-properties', { properties: ['data-test-id'] }],
            'transform-remove-console',
         ],
      }),
      development: getPresets({
         presets: [
            [
            'next/babel',
            {
               'preset-react': {
                  importSource: '@welldone-software/why-did-you-render',
               },
            },
            ]
         ],
      }),
      test: getPresets({
         plugins: [
            'transform-react-remove-prop-types',
            'transform-dynamic-import',
            'require-context-hook',
         ],
         presets: [['next/babel']],
      }),
   },
   plugins: [
      [
         '@babel/plugin-proposal-decorators',
         {
            legacy: true,
         },
      ],
   ],
}
