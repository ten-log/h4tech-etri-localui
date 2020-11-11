import client from './client';

export const GetUwbData = ()=>{
  return  client.get('/gnss');
}
//
// export const PostUwbData =(uwbData)=>{
//   return client.post('/api/uwbData', {uwbData} );
// }
