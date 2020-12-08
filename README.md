# kashti-sdk
This npm package holds the code to support interactions between Kashti and Brigade

Please follow these instructions for installation of the SDK into your npm-enabled app

1. Install the SDK from NPM using this command:
`npm install kashti-sdk`

That's it! The SDK is very simple to import into your own projects.

For working on the SDK, please follow these steps whenever you are ready to push your code:

1. Verify that you have the latest version of the code so when you build the JS map from your local TS code nothing will be overwritten.  You can do this by merging your changes to master (if developing on a separate branch), then continuing with these steps.  If you are already developing on master, you do not need to do this.

2. Build the JS map from the TS code that you've written.  You can do this by using this command in the repo's root directory:
`npm run build`
If you receive an error message about `error code ELIFECYCLE`, run this command: `npm cache clean --force` then run this command: `npm i`

3. Add your changes on git using this command:
`git add -A`

4. Commit your changes on git using this command:
`git commit -m "Whatever message describes what you did"`

5. Push your changes with this command:
`git push`

6. Increment the npm version based on these new changes with one of the commands below. If you are making a major change, use `npm version major`. If you are making a minor change, use `npm version minor`. If you are making a patch, use `npm version patch`.

Your code changes should be updated now in Github and in NPM.  Users can install the latest version of the SDK by updating using this command:
`npm update`