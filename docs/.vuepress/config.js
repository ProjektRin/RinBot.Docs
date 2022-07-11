const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'zh-CN',
    title: 'RinBot',
    description: '多功能(x) IM 机器人',
    base: '/docs.RinBot/',

    theme: defaultTheme({
        logo: '/images/avatar.jpg',

        tip: '提示',
        warning: '注意',
        danger: '警告',

        repo: 'https://github.com/ProjektRin/RinBot',

        editLinkText: '编辑此页',
        docsBranch: 'master',
        docsDir: 'docs',

        lastUpdated: true,
        lastUpdatedText: '最近更新',

        notFound: [
            '你来错地方了',
            '这里是禁区',
            '<<错误>><<错误>><<错误>>异常的有机体侵入<<代码已损坏>>区域。'
        ],

        navbar: [{
                text: '首页',
                link: '/',
            },
            {
                text: '简介',
                link: '/guide/',
            },
            {
                text: '模块',
                link: '/modules/',
            }
        ],
        sidebar: {
            '/guide/': [{
                text: '简介',
                collapsable: true,
                children: [
                    '/guide/',
                    '/guide/command',
                    '/guide/about'
                ]
            }, ],
            '/modules/': [{
                text: '模块',
                collapsable: true,
                children: [
                    '/modules/',
                    '/modules/arcaea',
                    '/modules/apex',
                    '/modules/core',
                    '/modules/interact',
                    '/modules/sign'
                ]
            }, ]
        },
        sidebarDepth: 1
    }),
}