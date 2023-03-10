```bash
  📂 src
    📂 islands # svelte components
      📂 search
        📄 SearchBar.svelte
        📄 SearchForm.svelte
        📄 SearchResult.svelte
        📄 SearchList.svelte
      📂 slider
        📄 SliderBox.svelte
    📂 containers # specific components by page
      📂 home
        📄 Hero.astro
        📄 AboutMe.astro
        📄 Skills.astro
        📄 Experience.astro
      📂 blog
        📄 PostCard.astro
        📄 PostList.astro
      📂 works
        📄 ProjectsCard.astro
    📂 pages # web pages
      📂 /
        📄 index.astro
      📂 /blog
        📄 [...page].astro # for pagination
        📄 [id].astro # specific post
      📂 /works
        📄 [...page].astro
      📂 /snippets
        📄 [...page].astro
        📄 [id].astro # specific post
      📂 /contact
        📄 index.astro
      📂 /hire
        📄 index.astro
    📂 shared
      📂 components # global componets
        📂 mdx
          📄 Pre.astro
          📄 A.astro
          📄 Code.astro
          📄 Table.astro
        📂 svg
          📂 icons
            📄 ...
            📄 index.ts
          📂 logos
            📄 ...
            📄 index.ts
        📂 elements
          📄 Avatar.astro
          📄 Button.astro
          📄 Link.astro
          📄 Title.astro
          📄 NavLink.astro
          📄 Time.astro
          📄 TimeAgo.astro
          📄 ReadTime.astro
          📄 LanguageMark.astro
        📂 layout
          📄 Navbar.astro
          📄 Footer.astro
      📂 utils
      📂 libs
      📂 styles
  📂 docs
    📄 folder_structure.md
  📂 public
```