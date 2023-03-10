import Angular from './Angular.astro'
import AstroJS from './AstroJS.astro'
import CPP from './CPP.astro'
import CSS from './CSS.astro'
import Deno from './Deno.astro'
import GO from './GO.astro'
import GraphQL from './GraphQL.astro'
import HTML from './HTML.astro'
import Java from './Java.astro'
import JavaScript from './JS.astro'
import JSON from './JSON.astro'
import JSX from './JSX.astro'
import Markdown from './Markdown.astro'
import MongoDB from './MongoDB.astro'
import NestJS from './NestJS.astro'
import NextJS from './NextJS.astro'
import NodeJS from './NodeJS.astro'
import PostgreSQL from './PostgreSQL.astro'
import Python from './Python.astro'
import React from './React.astro'
import Rust from './Rust.astro'
import SASS from './SASS.astro'
import Svelte from './Svelte.astro'
import TSX from './TSX.astro'
import TypeScript from './TypeScript.astro'

const logos: Record<string, Function> = {
  Angular,
  astro: AstroJS,
  AstroJS,
  angular: Angular,
  CPP,
  cpp: CPP,
  CSS,
  css: CSS,
  Deno,
  deno: Deno,
  GO,
  go: GO,
  GraphQL,
  graphql: GraphQL,
  gql: GraphQL,
  HTML,
  html: HTML,
  Java,
  java: Java,
  JavaScript,
  javascript: JavaScript,
  js: JavaScript,
  JSON,
  json: JSON,
  JSX,
  jsx: JSX,
  Markdown,
  markdown: Markdown,
  md: Markdown,
  MongoDB,
  mongodb: MongoDB,
  NestJS,
  nestjs: NestJS,
  NextJS,
  nextjs: NextJS,
  NodeJS,
  nodejs: NodeJS,
  PostgreSQL,
  postgresql: PostgreSQL,
  Python,
  python: Python,
  py: Python,
  React,
  react: React,
  Rust,
  rust: Rust,
  rs: Rust,
  SASS,
  sass: SASS,
  scss: SASS,
  Svelte,
  svelte: Svelte,
  TSX,
  tsx: TSX,
  TypeScript,
  typescript: TypeScript,
  ts: TypeScript,
} as const

export default logos