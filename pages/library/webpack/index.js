import PageTitle from '../../../components/PageTitle'
import StepMajor from '../../../components/StepMajor'
import StepMinor from '../../../components/StepMinor'
import Code from '../../../components/Code'
import * as data from '../../../utils/page-data/webpack-data'

export default function Webpack() {
    return (
        <>
            <PageTitle pageTitle="Update Webpack Polyfill" />
            <StepMajor
                step="1.0.0"
                sentence="[INSERT WHY WE NEED TO DO IT]"
                direction="The current version of React's webpack no longer includes NodeJS polyfills by default so we have to install the required dependencies and overriding the default webpack configuration."
                sideNote=""
                />
            <StepMinor
                step="1.1.0"
                sentence="Install the necessary packets"
                filePath="/client"
                direction="Install in the `client` directory."
                sideNote=""
                />
            <Code
                language="console"
                source={data.step110}
                />
            <StepMinor
                step="1.1.1"
                sentence="Override the create-react-app webpack config file"
                filePath="/client/config-overrides.js"
                direction="In the root folder of your project, create a new file called `config-overrides.js` and add the following code to it"
                sideNote=""
                />
            <Code
                language="code"
                source={data.step111}
                />
            <StepMinor
                step="1.1.2"
                sentence="Override package.json to include the webpack configuration"
                filePath="/config/prod.js"
                direction="Within the package.json file, replace react-scripts with react-app-rewired scripts for the three following scripts fields to update the webpack configuration."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step112}
                />
        </>
    )
}