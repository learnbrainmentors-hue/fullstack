
const controller = new AbortController();
setTimeout(()=>{
    controller.abort();
}, 3000);
const promise = fetch('https://official-joke-api.appspot.com/random_joke', {signal:controller.signal});
promise.then(response=>{
    const p = response.json();
    p.then(data=>console.log(data)).catch(err=>console.log('Invalid JSON', err));
}).catch(err=>console.log('Error in Res ', err));


const url = new URL('https://ravenleatherz.com/shahrukh-khans-leather-jacket/?srsltid=AU7gw4XwZTS0-1ULx7o8axx8BxKMLrGL75ut3M2ie_sm_HSoQdmimT5O');
console.log('Host Name ' , url.hostname);
console.log('Path name ', url.pathname);
console.log('Search Param ',url.searchParams);
