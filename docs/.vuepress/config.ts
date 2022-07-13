import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'

import { viteBundler } from '@vuepress/bundler-vite'

import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { containerPlugin } from '@vuepress/plugin-container'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'RinBot',
    description: '多功能(x) IM 机器人',
    //base: '/RinBot.Docs/',

    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        mediumZoomPlugin({
            // options
        }),
        containerPlugin({
            type: 'slot',
            before: (info: string): string => "<div class=\"footer content__footer\"><p>",
            after: (): string => '</p></div>\n'
        }),
    ],

    bundler: viteBundler({
        viteOptions: {
            // @ts-expect-error: vite does not provide types for ssr options yet
            ssr: {
                //noExternal: ['wow.js'],
            },
        },
        vuePluginOptions: {},
    }),

    theme: defaultTheme({
        logo: '/images/avatar.jpg',

        tip: '提示',
        warning: '注意',
        danger: '警告',

        repo: 'https://github.com/ProjektRin/RinBot',

        editLinkText: '编辑此页',
        docsRepo: 'https://github.com/ProjektRin/RinBot.Docs',
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
                //collapsable: true,
                children: [
                    '/guide/',
                    '/guide/command',
                    '/guide/term_of_use',
                    '/guide/about'
                ]
            }, ],
            '/modules/': [{
                text: '模块',
                //collapsable: true,
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
})