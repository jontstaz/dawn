const CONFIG = new Config({
  crypto: {
    coin: 'BTC',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Melbourne,AU',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'reading',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'subs + lemmy',
        links: [
          {
            name: 'r/unixporn',
            url: 'https://www.reddit.com/r/unixporn/'
          },
          {
            name: 'r/selfhosted',
            url: 'https://www.reddit.com/r/SelfHosted/',
          },
          {
            name: 'r/programming',
            url: 'https://www.reddit.com/r/programming/'
          },
          {
            name: 'l/selfhosted',
            url: 'https://programming.dev/c/selfhosted@lemmy.world',
          },
          {
            name: 'l/piracy',
            url: 'https://programming.dev/c/piracy@lemmy.dbzer0.com',
          }
          ]
        },
        {
        name: 'blogs',
        links: [
          {
            name: 'krebsonsecurity',
            url: 'https://krebsonsecurity.com'
          },
          {
            name: 'hackernews',
            url: 'https://news.ycombinator.com/'
          },
          {
            name: 'dev.to',
            url: 'https://dev.to'
          },
          {
            name: 'noted.lol',
            url: 'https://noted.lol',
          }
          ]
        },
        {
        name: 'boards',
        links: [
          {
            url: 'https://4chan.org/biz/',
            name: '/biz/'
          },
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            name: '/tv/',
            url: 'https://4chan.org/tv/',
            icon: 'device-tv'
          },
          {
            name: '/v/',
            url: 'https://4chan.org/v/',
            icon: 'device-gamepad',
            icon_color: '#8b647b'
          },
          {
            name: '/r9k/',
            url: 'https://4chan.org/r9k/',
            icon: 'robot'
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html'
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code'
          }
        ]
      }]
    },
    {
      name: 'code',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'discovery',
          links: [
            {
              name: 'ProductHunt',
              url: 'https://producthunt.com',
              icon: 'brand-producthunt'
            },
            {
              name: 'CodeCanyon',
              url: 'https://codecanyon.net',
              icon: 'basket-code'
            },
            {
              name: 'Trending',
              url: 'https://github.com/trending',
              icon: 'brand-github'
            },
            {
              name: 'Null',
              url: 'https://nullphpscript.com/',
              icon: 'brand-php'
            }
          ]
        },
        {
          name: 'Forums',
          links: [
            {
              name: 'Nulled',
              url: 'https://nulled.to',
              icon: 'disc'
            },
            {
              name: 'Cracked',
              url: 'https://cracked.io',
              icon: 'disc'
            },
            {
              name: 'HackForums',
              url: 'https://hackforums.net/',
              icon: 'disc'
            },
            {
              name: 'Babiato',
              url: 'https://boards.4channel.org/mu/',
              icon: 'disc'
            }
          ]
        },
        {
          name: 'me',
          links: [
            {
              name: 'hakatime',
              url: 'http://haka.jonte.au',
              icon: 'code'
            },
            {
              name: 'github',
              url: 'https://github.com/jontstaz',
              icon: 'brand-github',
            },
            {
              name: 'gitea',
              url: 'https://git.jonte.au',
              icon: 'brand-git',
            }
          ]
        }
      ]
    }]
});
