# Habit tracker

## User interface
Tacker has the simpliest user interface wich provides following functions:
- create new habit
- track the daily progress of habit integration into the user's life
- remove habit

## Functional requirements
### Create habit
Create habit with the following properties:
- Title
- Amount of days to track the progress

### View progress of existing habits on dashboard
- Habit title
- Checkboxes according to amount of days for every habit
- Display status of successfully completed habits as done (every checkbox is checked and amount days for current habit has expired)
- button to remove habit (only after confirmation)

## Development requirements
### Track progress
- Save amount of days for every habit ("duration" property)
- Don't create the array of progress ("progress" property) until at least one checkbox it checked
- The last item of "progress" array is always true
- New items to the progress array are added only by check of some checkbox
- 
