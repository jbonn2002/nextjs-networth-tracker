import Link from "next/link";

import ExpandingArrow from "./logos/ExpandingArrow";

export default function HelpArticleLink({ title }: { title: string }) {
  return (
    <Link
      href={`/help`}
      className="group flex items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-green-100 active:bg-green-200 sm:px-4"
    >
      <h3 className="text-sm font-medium text-gray-600 sm:text-base">
        {title}
      </h3>
      <ExpandingArrow className="-ml-4 h-4 w-4 text-gray-400 group-hover:text-green-500" />
    </Link>
  );
}
