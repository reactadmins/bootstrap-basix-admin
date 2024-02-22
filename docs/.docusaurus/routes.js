import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '111'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '52c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '723'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd50'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a70'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '3db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '019'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a5c'),
    exact: true
  },
  {
    path: '/old-index',
    component: ComponentCreator('/old-index', '491'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '1a8'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '8b5'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'f7a'),
            routes: [
              {
                path: '/Charts/ApexCharts',
                component: ComponentCreator('/Charts/ApexCharts', '026'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Charts/Chartjs',
                component: ComponentCreator('/Charts/Chartjs', '761'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Charts/Recharts',
                component: ComponentCreator('/Charts/Recharts', 'ef0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Alert',
                component: ComponentCreator('/Components/Alert', '271'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Badge',
                component: ComponentCreator('/Components/Badge', 'dc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Button',
                component: ComponentCreator('/Components/Button', '1b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Card',
                component: ComponentCreator('/Components/Card', '6e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Modal',
                component: ComponentCreator('/Components/Modal', 'dbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Progress',
                component: ComponentCreator('/Components/Progress', '005'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Socials',
                component: ComponentCreator('/Components/Socials', 'e18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Table',
                component: ComponentCreator('/Components/Table', '330'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Tabs',
                component: ComponentCreator('/Components/Tabs', '836'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Typography',
                component: ComponentCreator('/Components/Typography', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Components/Widgets',
                component: ComponentCreator('/Components/Widgets', '79c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Forms/AdvancedForm',
                component: ComponentCreator('/Forms/AdvancedForm', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Forms/BasicForm',
                component: ComponentCreator('/Forms/BasicForm', '99e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Forms/FormWizard',
                component: ComponentCreator('/Forms/FormWizard', '2a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Maps/GoogleMap',
                component: ComponentCreator('/Maps/GoogleMap', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Maps/LeafletMaps',
                component: ComponentCreator('/Maps/LeafletMaps', '539'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Setup',
                component: ComponentCreator('/Setup', 'b65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '98e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
