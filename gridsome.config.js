module.exports = {
  siteName: 'Alan’s GitHub Pages',
  siteUrl: 'https://alanjcfs.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'markdownPost',
        remark: {}
      }
    }
  ],
  transformers: {
    remark: {}
  }
}
