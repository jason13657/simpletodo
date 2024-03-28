import TotoList from "@/components/TotoList";
import QureyProvider from "@/context/query";

export default function Home() {
  return (
    <QureyProvider>
      <TotoList />;
    </QureyProvider>
  );
}
