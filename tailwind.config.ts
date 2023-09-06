import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'


export default <Partial<Config>>{
    theme: {},
    plugins: [require('flowbite/plugin')],
    content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./utils/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
        `./app.config.{js,ts}`
    ]
}
