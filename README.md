# gatsby-remark-pangu
A gatsby plugin for adding text spaces by [pangu.js](https://github.com/vinta/pangu.js)

## Install
`npm install gatsby-remark-pangu`

## How to use
If you are using “gatsby-transformer-remark”, you can add “gatsby-remark-pangu” like this:
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-pangu`
      ],
    },
  },
]
```

If you are using “gatsby-plugin-mdx”, you can add “gatsby-remark-pangu” like this:
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [".mdx", ".md"],
      gatsbyRemarkPlugins: [
        `gatsby-remark-pangu`,
      ],
    },
  },
]
```
