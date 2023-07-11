# Likert Builder

A tool for displaying custom charts to intuitively show distributions of responses to Likert data. To use, adjust titles, font-sizes, colours and labels to your taste. Add your data (using percentages, not raw values, making sure to include decimal places). Add multiple Likert items if required. Click the export buttons to produce png or jpg images of your chart.

Live version: https://likertbuilder.vercel.app/
To start in dev mode: npm run dev

Likert Builder is still under development. The following is a list of planned additions/changes:

- Add the ability to remove Likert items
- Add the ability to reorder Likert items
- Add the ability to add subtitles above and between Likert items (and remove and reorder as required)
- Refactor the SCSS to be more consistent with variables and classnames
- Add validation of Likert percentages, so that users are warned if their percentages do not add up to 100%
- Add the ability to use raw numbers rather than percentages, with Likert Builder producing the percentages automatically
- Add support for any size of Likert scale (not just 7 point scales)
- Redesign the colour picker for mobile
- Make it clearer that the key colours can only be selected from the key input section
- Add the ability to resize the chart dimensions, add border, add drop shadow
- Add save to csv, read from csv functionality
- Improve visual design of the application, including collapsing parts of the sidebar and the sidebar itself
- Add several default colour palettes to choose from (including support for black and white / pattern based versions)
- Add the ability to move the key to the sides or bottom, as well as the top
