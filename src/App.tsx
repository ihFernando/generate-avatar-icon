import React, { useCallback, useEffect, useState } from 'react'

import InputText from './components/InputText'
import InputColor from './components/InputColor'

import { getFirstLettersOfFirstNameAndLastName } from './utils/getFirstLettersOfFirstNameAndLastName'
import { formatNameIcon } from './utils/formatNameIcon'
import { CANVAS_SIZE } from './constants'

interface IIcon {
  name: string
  textColor: string
  backgroundColor: string
}

interface ISetColor {
  label: keyof IIcon
  value: string
}

function App() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const context = canvas?.getContext('2d')

  const [urlToDownload, setUrlToDownload] = useState<string>('')

  const [icon, setIcon] = useState<IIcon>({
    name: 'BENJAMIN YANKES',
    textColor: '#281006',
    backgroundColor: '#823717'
  })

  const handleIcon = useCallback(
    ({ label, value }: ISetColor) => setIcon({ ...icon, [label]: value }),
    [icon, setIcon]
  )

  const addColor = useCallback(
    (color: string) => {
      if (context != null) {
        context.rect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height)
        context.fillStyle = color
        context.fill()
      }
    },
    [context]
  )

  const addText = useCallback(
    (text: string, textColor: string) => {
      const getLetterOfName = getFirstLettersOfFirstNameAndLastName(text)
      if (context != null) {
        context.font = 'bolder 50px Arial'
        context.fillStyle = textColor
        context.textAlign = 'center'
        context.fillText(getLetterOfName, 50, 65)
      }
    },
    [context]
  )

  useEffect(() => {
    const { name, textColor, backgroundColor } = icon

    if (context != null) {
      context.clearRect(0, 0, canvas.width, canvas.height)

      addColor(backgroundColor)
      addText(name.toUpperCase(), textColor)
    }

    setUrlToDownload(canvas?.toDataURL())
  }, [canvas, context, icon, addColor, addText])

  return (
    <>
      <div className="container mx-auto p-8 md:w-1/2 md:h-screen md:columns-2">
        <div className="h-full flex flex-col justify-center mb-12">
          <h1 className="text-4xl md:text-3xl text-yellow-800">
            <strong>Generate Avatar Icon</strong>
          </h1>

          <InputText
            onChange={(value: string) => handleIcon({ label: 'name', value })}
            defaultValue={icon.name}
          />

          <InputColor
            id="bg-color"
            label="Pick a backgroud color"
            onChange={(value: string) =>
              handleIcon({ label: 'backgroundColor', value })
            }
            defaultValue={icon.backgroundColor}
          />

          <InputColor
            id="tx-color"
            label="Pick a text color"
            onChange={(value: string) =>
              handleIcon({ label: 'textColor', value })
            }
            defaultValue={icon.textColor}
          />
        </div>

        <div className="h-full flex flex-col items-center justify-center">
          <canvas
            id="canvas"
            width={CANVAS_SIZE.width}
            height={CANVAS_SIZE.height}
            style={{ background: '#823717' }}
          />

          <a
            href={urlToDownload}
            download={`icon-${formatNameIcon(icon.name)}.jpg`}
            className="btn btn-warning mt-8"
          >
            Download .jpg
          </a>
          <a
            href={urlToDownload}
            download={`icon-${formatNameIcon(icon.name)}.png`}
            className="btn btn-warning mt-4"
          >
            Download .png
          </a>
        </div>
      </div>
      <footer className="absolute w-full flex justify-center bottom-10 ">
        <p className="text-yellow-800">
          Made by{' '}
          <a href="https://ihfernando.com.br/" target="_blank" rel="noreferrer">
            <strong>ihFernando</strong>
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
