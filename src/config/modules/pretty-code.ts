import rehypePrettyCode, { Options } from 'rehype-pretty-code'
import type { AstroUserConfig } from 'astro'

const prettyCodeOptions: Partial<Options> = {
  theme: "one-dark-pro",
  onVisitLine (node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
  onVisitHighlightedLine (node) {
    node.properties.className.push("highlighted")
  },
  onVisitHighlightedWord (node) {
    node.properties.className = ["word"]
  },
  tokensMap: {
    fn: 'entity.name.function',
    kwd: 'entity.name.keyword',
    str: 'string',
    var: 'variable',
    num: 'constant.numeric',
    op: 'keyword.operator',
    punc: 'punctuation',
    const: 'constant'
  },
  keepBackground: false,
}

const prettyCodeConfig: AstroUserConfig = {
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  }
}

export default prettyCodeConfig