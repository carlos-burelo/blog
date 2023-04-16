import satori, { type SatoriOptions } from "satori"
import { readFileSync } from 'node:fs'
import { join } from 'node:path'


const cwd = process.cwd()
const font = readFileSync(join(cwd, 'public', 'ibm.ttf'))


const opts: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: "IBM",
      data: font,
      weight: 400,
      style: "normal",
    },
    {
      name: "IBM",
      data: font,
      weight: 500,
      style: "normal",
    },
    {
      name: "IBM",
      data: font,
      weight: 600,
      style: "normal",
    },
    {
      name: "IBM",
      data: font,
      weight: 700,
      style: "normal",
    }
  ]
}

export const generateOgImage = async (Component: Function, data: object) => {
  const image = await satori(Component(data), opts)
  return image
}
