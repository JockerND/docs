// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  theSidebar: [
    'intro',
    {
      type: 'category', 
      label: 'Access Web3 APIs ⚡️',
      collapsible: false,
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'access-apis'
        },        
      ]
    },
    {
      type: 'category', 
      label: 'Power-up Lava 🌋',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'power-lava-intro'
      },
      items: [
        {
          type: 'category', 
          label: 'Run Lava node',
          collapsible: true,
          link: {
            type: 'doc',
            id: 'lava-node-intro'
          },
          items: [
            {
              type: 'autogenerated', 
              dirName: 'lava-node'
            },        
          ]
        },
        'validator-intro',
        'provider-intro'
      ]
    },
    {
      type: 'category', 
      label: 'Lava Blockchain Reference',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Lava Blockchain'
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'lava-blockchain'
        },        
      ]
    },
    'faq',
    {
      type: 'link',
      label: 'Contribution',
      href: 'https://github.com/lavanet/docs/blob/master/CONTRIBUTING.md',
    },
  ],
};

module.exports = sidebars;