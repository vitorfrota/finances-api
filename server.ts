import { Application } from 'https://deno.land/x/oak/mod.ts';

import router from './src/routes/router.ts';

const port = 3333;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);

await app.listen({ port });