import { Card, SearchComponent } from "..";

export const HomePage = () => {
  return (
    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <SearchComponent placeholder="Search city..." />

      <div className="flex gap-6 flex-wrap">
        <Card />
      </div>
    </div>
  );
};
