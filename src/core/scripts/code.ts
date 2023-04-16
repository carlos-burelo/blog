const codeBlocks = document.querySelectorAll('pre') as NodeListOf<HTMLPreElement>
for (const codeBlock of codeBlocks) {
  const copyButton = codeBlock.querySelector('button') as HTMLButtonElement
  const code = codeBlock.querySelector('code') as HTMLElement

  copyButton.addEventListener('click', () => {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNode(code)
    selection?.removeAllRanges()
    selection?.addRange(range)

    document.execCommand('copy')

    selection?.removeAllRanges()

    copyButton.textContent = '✅'
    setTimeout(() => {
      copyButton.textContent = '📋'
    }, 500)
  })
}
