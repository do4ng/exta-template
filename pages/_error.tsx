import { useLocation } from "$exta-router";

export default function () {
  return (
    <>
      <h1>Cannot find page - {useLocation()}</h1>
    </>
  );
}
