type Props = {
  params: {
    name: string;
  };
};
type PageProps = {
  props: {
    message: string;
  };
} & Props;

export function getStaticParams() {
  return [{ name: "world" }];
}

export function getStaticProps({ params }: Props) {
  return {
    message: `Hello ${params.name}`,
  };
}

export default function ({ params, props }: PageProps) {
  return (
    <>
      <h1>{props.message}!</h1>
    </>
  );
}
