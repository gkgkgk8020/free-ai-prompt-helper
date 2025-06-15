// app/components/MobileAdPlaceholder.tsx
export default function MobileAdPlaceholder({
  marginTop = "mt-10",
  marginBottom = "mb-10",
}: {
  marginTop?: string;
  marginBottom?: string;
}) {
  return (
    <div className={`block lg:hidden w-[300px] h-[250px] mx-auto ${marginTop} ${marginBottom} bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm text-center`}>
      Mobile Ad Placeholder – Great for phones!
    </div>
  );
}



