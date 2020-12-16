import { MeController } from '@bluedit/controller';
export default function Me() {
  return (
    <MeController>
      {({ data, loading }) => (
        <>
          {loading && <h1>Loading ...</h1>}
          {data && <h1>{data.me.username}</h1>}
        </>
      )}
    </MeController>
  );
}
