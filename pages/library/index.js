// react / next
import Link from 'next/link'

// components
import PageTitle from '../../components/PageTitle'
import Card from '../../components/Card'

// styles
import styles from '../../styles/PageDocuments.module.scss'


const DocumentPage = () => {
    return (
        <main>
            <PageTitle pageTitle="Content Library" />
            <Card
                subjectTitle="Run React and Express Concurrently"
                categoryImg="/js.png"
                description="This is the kernal of a web application. We'll set up an API endpoint with Express and a frontend framework with React."
                url="/library/concurrently"
            />
            <Card
                subjectTitle="Create and Store Credentials Securely"
                categoryImg="/js.png"
                description="Since we're planning on hosting our app on a Platform as a Service ( PaaS ) we have the task of ensuring the credentials our app needs to work are safe and secure. We'll use the `key.js` file to act a switch to tell the app where to look for the credentials based on the server enviroment; production or development."
                url="/library/credentials"
            />
            <Card
                subjectTitle="Update Webpack Polyfill"
                categoryImg="/webpack.png"
                description="The current version of React's webpack no longer includes NodeJS polyfills by default so we have to install the required dependencies and overriding the default webpack configuration."
                url="/library/webpack"
            />
            <Card
                subjectTitle="Create Twilio Conversations Web App"
                categoryImg="/react.jpeg"
                description="The `Twilio.Conversations` namespace will then be available in the window scope of your JavaScript browser-based web applications. The SDKs provide a convenient collection of objects, methods, and events to connect your client-side application to Conversations."
                url="/library/twilio"
            />
        </main>
    )
}

export default DocumentPage