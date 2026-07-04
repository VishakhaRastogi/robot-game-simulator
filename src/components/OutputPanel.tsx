type OutputPanelProps = {
  message: string;
};
function OutputPanel(props: OutputPanelProps) {
  const { message } = props;
  return (
    <>
      <section>
        <p>{message}</p>
      </section>
    </>
  );
}

export default OutputPanel;
