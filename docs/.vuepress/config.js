const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'zh-CN',
    title: 'RinBot',
    description: '多功能(?)QQ机器人',

    theme: defaultTheme({
        tip: '提示',
        warning: '注意',
        danger: '警告',

        lastUpdated: true,
        lastUpdatedText: '最近更新',

        notFound: [
            '你来错地方了',
            '这里是禁区',
            '<<错误>><<错误>><<错误>>，异常的有机体侵入<<代码已损坏>>区域。'
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
                text: '命令集',
                link: '/command_sets/',
            }
        ],
        sidebar: {
            '/guide/': [{
                text: '简介',
                collapsable: true,
                children: [
                    '/guide/',
                    '/guide/command'
                ]
            }, ],
            '/command_sets/': [{
                text: '命令集',
                collapsable: true,
                children: [
                    '/command_sets/',
                    '/command_sets/core/',
                    '/command_sets/apex',
                    '/command_sets/arcaea',
                    '/command_sets/dingzhen',
                    '/command_sets/loong',
                    '/command_sets/lottery',
                    '/command_sets/daily-sign',
                    '/command_sets/pixiv-setu',
                    '/command_sets/poke',
                    '/command_sets/suan-gua',
                    '/command_sets/tarot',
                ]
            }, ]
        },
        sidebarDepth: 1
    }),
}