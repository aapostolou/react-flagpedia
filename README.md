This package is a react implementation of [flagpedia flags](https://flagpedia.net/download/api).

# Usage

The `Flag` component returns an `<img>` element based on the provided props.

### Examples

```tsx
<Flag code="gr" /> // Defaults to variant="waving"
<Flag code="gr" variant="original-width" />
<Flag code="gr" variant="original-height" />
<Flag code="gr" variant="svg" width="60" /> // "width" is not required
```

Result:

<img width="48" height="36" alt="Greece" srcset="https://flagcdn.com/96x72/gr.png 2x, https://flagcdn.com/144x108/gr.png 3x" src="https://flagcdn.com/48x36/gr.png">
<img width="40" alt="Greece" srcset="https://flagcdn.com/w80/gr.png 2x" src="https://flagcdn.com/w40/gr.png">
<img height="40" alt="Greece" srcset="https://flagcdn.com/h80/gr.png 2x, https://flagcdn.com/h120/gr.png 3x" src="https://flagcdn.com/h40/gr.png">
<img alt="Greece" width="60" src="https://flagcdn.com/gr.svg">

<p></p>

```tsx
<Flag code="gr" size="112x84" type="jpg" />
```

Result: A `waving` `greek` flag that has **width** = `112`, **height** = `84` and is a `jpg`.

<img width="112" height="84" alt="Greece" type="jpg" srcset="https://flagcdn.com/224x168/gr.png 2x, https://flagcdn.com/336x252/gr.png 3x" src="https://flagcdn.com/112x84/gr.png">

### Props

|  prop   |                                                       type                                                        |          default          |
| :-----: | :---------------------------------------------------------------------------------------------------------------: | :-----------------------: |
|  code   |                                               [FlagCode](#FlagCode)                                               |          `null`           |
| variant |                            `waving` \| `original-width` \| `original-height` \| `svg`                             |         `waving`          |
|  size   | [WavingSize](#WavingSize) \| [OriginalWidthSize](#OriginalWidthSize) \| [OriginalHeightSize](#OriginalHeightSize) | `48x36` \| `w40` \| `h40` |
|  type   |                                             `png` \| `webp` \| `jpg`                                              |           `png`           |

\* All `img` element props are also inherited (`ImgHTMLAttributes<HTMLImageElement>`)
\*\* The size defaults are relative to the type

#### Types

##### FlagCode

All the flag codes can be found [here](https://flagcdn.com/en/codes.json)

##### WavingSize

\*All the sizes that are showing on [flagpedia](https://flagpedia.net/download/api)

`16x12` `20x15` `24x18` `28x21` `32x24` `36x27` `40x30` `48x36` `56x42` `60x45` `64x48` `72x54` `80x60` `84x63` `96x72` `108x81` `112x84` `120x90` `128x96` `144x108` `160x120` `192x144` `224x168` `256x192`

##### OriginalWidthSize

`w20` `w40` `w80` `w160` `w320` `w640` `w1280` `w2560`

\*All the sizes that are showing on [flagpedia](https://flagpedia.net/download/api)

##### OriginalHeightSize

`h20` `h24` `h40` `h60` `h80` `h120` `h240`

\*All the sizes that are showing on [flagpedia](https://flagpedia.net/download/api)

# Credits

-   The implementation wouldn't be possible without https://flagpedia.net/
-   This package was build using [react-library-template](https://github.com/morewings/react-library-template)
