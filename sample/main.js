import "babel-polyfill";

import {Configuration} from '../index';

async function main() {
    try {
        let configuration = new Configuration();
        var uri = await configuration.getUri();
        console.log(uri);
    } catch (error) {
        console.error(error);
    }
}

main();
console.log("STARTED");