import {Images } from "./../utlis/tag";
export default function CategoryArticle() {
  return (
    <article className="border-b border-gray-200 pb-8">
      <div className="bg-gradient-to-br from-red-600 to-blue-600 h-64 mb-4 flex items-center justify-center rounded-xl shadow-lg">
        <Images src="https://tse2.mm.bing.net/th/id/OIF.glz1saon2GAtC68ICx2MYw?rs=1&pid=ImgDetMain&o=7&rm=3" />
      </div>
      <div className="space-y-3">
        <div className="text-xs text-gray-500 font-medium">
          POLITICS • 1 HOUR AGO
        </div>
        <h2
          className="text-2xl sm:text-3xl font-bold cursor-pointer hover:text-blue-600 transition-colors"

        >
          Parliament approves major infrastructure spending bill
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          £50 billion investment package aims to modernise transport networks
          and digital infrastructure across all four nations.
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="font-medium">By Political Correspondent</span>
          <span>Westminster</span>
        </div>
      </div>
    </article>
  );
}
