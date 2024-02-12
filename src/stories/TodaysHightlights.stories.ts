import { setup, type Meta, type StoryObj } from '@storybook/vue3'

import TodaysHightlights from '../components/TodaysHightlights.vue'

import { createPinia } from 'pinia'
import type { App } from 'vue'
import '../assets/main.css'

const pinia = createPinia()
setup((app: App) => {
  app.use(pinia)
})
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Today’s Hightlights',
  component: TodaysHightlights,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {} // default value
} satisfies Meta<typeof TodaysHightlights>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const TodaysHightlightsDesktop: Story = {
  decorators: [
    () => ({
      template:
        '<div style="width: 991; height: 1023px; background: var(--bg-main);"><story/></div>'
    })
  ]
}

export const TodaysHightlightsMobile: Story = {
  decorators: [
    () => ({
      template:
        '<div style="width: 375px; height: 1800px; background: var(--bg-main);"><story/></div>'
    })
  ]
}
