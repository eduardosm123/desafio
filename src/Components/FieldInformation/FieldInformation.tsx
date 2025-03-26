export default function FieldInformation({
  field,
  information,
}: {
  field: string;
  information: string;
}) {
  return (
    <p
      className="text-gray-100 text-sm/4 text-wrap"
      data-testid="FieldInformation"
    >
      <span className="font-bold">{field}</span>
      <span className="break-words">{information}</span>
    </p>
  );
}
