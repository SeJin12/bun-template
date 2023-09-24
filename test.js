const p1 = performance.now();

console.log(p1);
// console.log(Bun.env);
// console.log(Bun.main); 

// await Bun.sleep(1000);

// console.log(1);
// const server = Bun.serve({
//     port: process.env.PORT,
//     fetch(req) {
//         const url = new URL(req.url);
//         const path = url.pathname;
//         console.write(path);
//         if(path === '/')
//             return new Response('Home page!');
//         if(path === '/blog')
//             return new Response('Blog!');

//         return new Response("Bun!!");
//     }
// })

