export default function ErrorMessage({
  message,
}: {
  message: string | undefined;
}) {
  return (
    <span className="text-red-500 text-xs">
      {message ? message : '필수 항목입니다.'}
    </span>
  );
}
