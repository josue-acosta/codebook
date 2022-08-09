import Link from 'next/link'

// https://semver.org/

import PageTitle from '../../../components/PageTitle'
import StepMajor from '../../../components/StepMajor'
import StepMinor from '../../../components/StepMinor'
import Code from '../../../components/Code'
import * as data from './data'

export default function Concurrently() {
    return (
        <>
            <PageTitle pageTitle='Run React and Express Concurrently' />
            <StepMajor
                step='1.0.0'
                sentence='Initiate basic frontend and backend'
                direction="This is the kernal of a web application. We'll set up an API endpoint with Express and a frontend framework with React."
                sideNote=''
                />
            <StepMinor
                step='1.0.1'
                sentence='Initialize Git'
                filePath=''
                direction='Create a new directory and run the following command.'
                sideNote=""
                />
            <Code
                language='console'
                source={data.step101}
                />
            <StepMinor
                step='1.0.2'
                sentence='Install the necessary packets'
                filePath=''
                direction='Concurrently allow us to run the Express and React server at the same time. We just have to add CORS to our API to allow cross-origin requests.'
                sideNote=""
                />
            <Code
                language='console'
                source={data.step102}
                />
            <StepMinor
                step='1.0.3'
                sentence='Configure a node.js script to boot up both servers'
                filePath='/package.json'
                direction="It boots up two servers concurrently; Express' `nodemon server` and React's `npm run dev`. We technically create a second one with `--prefix client` that has directs the command to the `client` directory."
                sideNote=""
                />
            <Code
                language='code'
                source={data.step103}
                />
            <StepMinor
                step='1.1.0'
                sentence='Initialize the backend'
                filePath='/app.js'
                direction="Create a file in the root folder and call it `app.js`."
                sideNote=""
                />
            <Code
                language='code'
                source={data.step110}
                />
            <StepMinor
                step='1.1.1'
                sentence='Create an API end point'
                filePath='/routes/API_END_POINTRoutes.js'
                direction='Create a directory and call it `routes`. Then create a file and call it `API_END_POINTRoutes.js`. Notice to keep `Routes` at the end of the file name.'
                sideNote=''
                />
            <Code
                language='code'
                source={data.step111}
                />
            <StepMinor
                step='1.2.0'
                sentence='Initiate the frontend'
                filePath=''
                direction='Generate a React app inside the root folder and call it `client`.'
                sideNote=''
                />
            <Code
                language='console'
                source={data.step120}
                />
            <StepMinor
                step=''
                sentence='How To: Run the app'
                filePath=''
                direction='On the root directory run the following command.'
                sideNote=''
                />
            <Code
                language='console'
                source={data.howTo000}
                />
        </>
    )
}