/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'PaperA': "#2a46c1",
        'PaperB': "hsl(230, 89%, 65%)",
        'ScissorsA': "#c86d1a",
        'ScissorsB': "hsl(40, 84%, 53%)",
        'RockA': "#9d1833",
        'RockB': "hsl(349, 70%, 56%)",
        'SpockA': "rgb(42,144,174)",
        'SpockB': "rgb(78,192,210)",
        'LizardA': "rgb(96,55,171)",
        'LizardB': "rgb(141,93,231)",
        'bgCard': "#ededef",
        'grayShadow': "#b8bfd2",
        'Lizard-Gradient': "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
        'Cyan': "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
        'scoreBg': "#fafafa",
        'textScore': "#57556a",
        /*  ### Neutral */
        'Dark-Text': "hsl(229, 25%, 31%)",
        'Score-Text': "hsl(229, 64%, 46%)",
        'Header-Outline': "hsl(217, 16%, 45%)",
      }
    },
  },
  plugins: [],
}