import { setup, type Meta, type StoryObj } from '@storybook/vue3'

import WeatherDayCard from '../components/WeatherDayCard.vue'

import { getNextDays } from '@/auxiliar/getNextDay'
import { createPinia } from 'pinia'
import type { App } from 'vue'
import '../assets/main.css'

const pinia = createPinia()
setup((app: App) => {
  app.use(pinia)
})
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Weather Day Card',
  component: WeatherDayCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    day: {
      control: 'date'
    }
  },
  args: {} // default value
} satisfies Meta<typeof WeatherDayCard>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const WeatherDayCardTommorow: Story = {
  args: {
    day: getNextDays(),
    weatherCode: 61,
    temperature2mMin: -12,
    temperature2mMax: 20
  }
}

export const WeatherDayCardNotTommoreow: Story = {
  args: {
    day: getNextDays(new Date(), 3),
    weatherCode: 0,
    temperature2mMin: -12,
    temperature2mMax: 20
  }
}
