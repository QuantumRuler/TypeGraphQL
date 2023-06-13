## TypeGraphQL
# TypeGraphQL

# How to setup

1. First, you should install node.js on your device.
2. Then you install the yarn package manager

    ```jsx
    npm install yarn
    ```

3.  First, initialize yarn.

    ```jsx
    yarn init -y
    ```

4. Now add dependencies

    ```jsx
    yarn add apollo-server-express express graphql reflect-metadata type-graphql
    ```

5. Add devdependencies for then

    ```jsx
    yarn -D  @types/express @types/graphql @types/node nodemon ts-node typescript
    ```

6. Make a tsconfig.json file


    ```jsx
    tsc --init
    ```

7. Enable declaration , experimentalDecorators, emitDeclarationOnly in tsconfig.json
8. If there is “tsc : File C:\Users\bveda\AppData\Roaming\npm\tsc.ps1 cannot be loaded” error then run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned` as admin in powershell.
