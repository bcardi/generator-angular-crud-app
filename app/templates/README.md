# AngularCrudApp

Sample Angular CRUD application.

# Notes
Make sure the windows desktop is all set to do key auth.
Else it will hang in different places on npm or bower install.
Make sure pageant.exe is running and exposing the keys you want to use if Git is set to use plink.exe
as its SSH agent.

# Setup

## Install required npm modules

### Global

```
npm install -g gulp
```

```
npm install -g typescript
```

```
npm install -g less 
```

```
npm install -g karma 
```

If karma install fails, you may need to run it as follows; replace the version as necessary.

```
npm install -g karma -msvs_version=2013
```

```
npm install -g karma-cli
```

### Local

Run the following command to install all of the npm modules referenced in the package.json file.

```
npm install
```