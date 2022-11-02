export {};
// import { describe, expect, it } from 'vitest';
// import {
//   FetchNetworkError,
//   FetchParserError,
//   FetchRequestError,
// } from 'src';
// import { either, option } from 'fp-ts';
// import { getMockUrl, server } from '../mocks';
// import { pipe } from 'fp-ts/lib/function';

// describe('jsonRequest', () => {
//   const endpoint = '/';
//   const mockUrl = getMockUrl(endpoint);

//   it('returns a network error', async () => {
//     const result = await jsonRequest<any>(mockUrl)({
//       method: 'GET',
//       options: option.none,
//     })();

//     pipe(
//       result,
//       either.fold(
//         (error) => {
//           expect(error.status).toEqual(500);
//           expect(error).toBeInstanceOf(FetchNetworkError);
//         },
//         () => {}
//       )
//     );
//   });

//   it('returns a request error', async () => {
//     server.get(endpoint).reply(400, {});

//     const result = await jsonRequest<any>(mockUrl)({
//       method: 'GET',
//       options: option.none,
//     })();

//     pipe(
//       result,
//       either.fold(
//         (error) => {
//           expect(error).toBeInstanceOf(FetchRequestError);
//           expect(error.status).toEqual(400);
//         },
//         () => {}
//       )
//     );
//   });

//   it('returns a parse error', async () => {
//     server.get(endpoint).reply(200);

//     const result = await jsonRequest<any>(mockUrl)({
//       method: 'GET',
//       options: option.none,
//     })();

//     pipe(
//       result,
//       either.fold(
//         (error) => {
//           expect(error).toBeInstanceOf(FetchParserError);
//         },
//         () => {}
//       )
//     );
//   });

//   it('returns a json response', async () => {
//     const posts = [
//       {
//         userId: 1,
//         id: 1,
//         title: 'first post title',
//         body: 'first post body',
//       },
//       {
//         userId: 2,
//         id: 5,
//         title: 'second post title',
//         body: 'second post body',
//       },
//       {
//         userId: 3,
//         id: 6,
//         title: 'third post title',
//         body: 'third post body',
//       },
//     ];

//     server.get(endpoint).reply(200, posts);

//     const result = await jsonRequest<any>(mockUrl)({
//       method: 'GET',
//       options: option.none,
//     })();

//     expect(result._tag).toEqual('Right');
//     expect(either.getOrElse(() => [])(result)).toEqual(posts);
//   });
// });
