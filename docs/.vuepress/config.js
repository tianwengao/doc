 
module.exports = {
    base: '/doc/',
    title: '个人主页',
    description: '我的博客',
    dest: 'dist',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            // { text: '博文',
            //   items: [
            //     { text: 'Android', link: '/android/' },
            //     { text: 'ios', link: '/ios/' },
            //     { text: 'Web', link: '/web/' }
            //   ] 
            // },
            // { text: '关于', link: '/about/' },
            // { text: 'Github', link: 'https://www.github.com/codeteenager' },
        ],
        sidebar:  {
            '/web/': ['', 'web1']
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}

