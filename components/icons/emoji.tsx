import { DefaultReactProps } from '../../lib/types'
import { WavingEmojiPrimitive } from './primitive/emoji'

export default function WavingEmoji ({ children }: DefaultReactProps): JSX.Element {
  return <WavingEmojiPrimitive>{children}</WavingEmojiPrimitive>
}
