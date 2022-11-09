##The Pipeline consists of 3 steps:

###1. The building step:

a) Install Front-End Dependencies
b) Install API Dependencies
c) Lint the frontend
d) Front-End Build from Angular to JavaScript
e) API Build from TS to JS

###2. The hold step:
a) This is a transience step that stops the pipeline from being executed to
until the Admin approves the deploy step

###3. The deploy step:
a) Deploys the API to EB
b) Deploys the Front-end to S3