import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from 'rehype-pretty-code';
import htmlMinifier from "astro-html-minifier";
const prettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{
        type: "text",
        value: " "
      }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
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
  }
};

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/shared/styles/mixins.scss";'
        }
      }
    }
  },
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  },
  integrations: [image(), svelte(), mdx({
    shikiConfig: {
      wrap: true
    }
  }), htmlMinifier({
    html: {
      minifyCss: true,
      minifyJs: true
    }
  })]
});