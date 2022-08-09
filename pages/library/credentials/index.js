import PageTitle from '../../../components/PageTitle'
import StepMajor from '../../../components/StepMajor'
import StepMinor from '../../../components/StepMinor'
import Code from '../../../components/Code'
import * as data from './data'

export default function Credentials() {
    return (
        <>
            <PageTitle pageTitle="Create and Store Credentials Securely" />
            <StepMajor
                step="1.0.0"
                sentence="Our responsibility to be safe and secure"
                direction="Since we're planning on hosting our app on a Platform as a Service ( PaaS ) we have the task of ensuring the credentials our app needs to work are safe and secure. We'll use the `key.js` file to act a switch to tell the app where to look for the credentials based on the server enviroment; production or development."
                sideNote=""
                />
            <StepMinor
                step="1.1.0"
                sentence="Install the necessary packets"
                filePath=""
                direction="Install in the root directory."
                sideNote=""
                />
            <Code
                language="console"
                source={data.step110}
                />
            <StepMinor
                step="1.2.0"
                sentence="Create the production/dev switch"
                filePath="/config/keys.js"
                direction="If the app knows it's running on a production environment it tells the server to look at the `prod.js` otherwise, look at `dev.js`."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step120}
                />
            <StepMinor
                step="1.2.1"
                sentence="Set development credentials"
                filePath="/config/dev.js"
                direction="We should use development or testing specific credentials if possible. At the very least, different credentials than the ones we use for production."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step121}
                />
            <StepMinor
                step="1.2.2"
                sentence="Set production credentials"
                filePath="/config/prod.js"
                direction="If the sever comes to this file, it gets told to look at the enviromental varibles. This is useally easy to set up on the PaaS' project settings. If you haven't created an account and have production specific credentials you don't have to worry about it yet. We'll get to it later."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step122}
                />
            <StepMinor
                step="1.3.0"
                sentence="Duplicate credentials and switch in client folder"
                filePath=""
                direction="Since React can't reach files outside of the `src` folder we'll duplicated the files in a location it can reach. Create a folder and call it `utils`. We're going to need them when we create a `get-tokens.js` module we'll create next."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step130}
                />
            <StepMinor
                step="1.3.1"
                sentence="Copy the same `keys.js` file over"
                filePath="/client/src/utils/keys.js"
                direction=""
                sideNote=""
                />
            <StepMinor
                step="1.3.2"
                sentence="Copy the same `dev.js` file over"
                filePath="/client/src/utils/dev.js"
                direction=""
                sideNote=""
                />
            <StepMinor
                step="1.3.3"
                sentence="Copy the same `prod.js` file over"
                filePath="/client/src/utils/prod.js"
                direction=""
                sideNote=""
                />
            <StepMinor
                step="1.4.0"
                sentence="Create or update `.gitignore` file"
                filePath="/.gitignore"
                direction="We're going to set our gitignore file to avoid uploading sensative data to GitHub - like `dev.js` for example. This way, we're free to develope locally while keeping our credentials safe from the internet and prepare our app for deployment."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step133}
                />
        </>
    )
}