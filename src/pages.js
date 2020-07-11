const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page'
    },
    template: './src/pages/home.hbs'
  },
  {
    output: './hello/index.html',
    content: {
      title: 'Hello',
      description: 'Hello Page'
    },
    template: './src/pages/hello.hbs'
  },

  {
    output: './bye/index.html',
    content: {
      title: 'Bye',
      description: 'Bye Page'
    },
    template: './src/pages/bye.hbs'
  }
]

module.exports = pages
