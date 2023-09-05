import CategoryCard from "@/components/CategoryCard";
import HelpArticleLink from "@/components/HelpArticleLink";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { HELP_CATEGORIES, POPULAR_ARTICLES } from "@/lib/content";
import React from "react";

const page = () => {
  return (
    <>
      <MaxWidthWrapper className="max-w-screen-lg">
        <div className="flex flex-col space-y-4 py-10">
          <h1 className="font-display text-xl font-bold text-white sm:text-3xl">
            👋 How can we help today?
          </h1>
          {/* <SearchButton /> */}
        </div>
      </MaxWidthWrapper>

      <div className="relative">
        <div className="absolute top-28 h-full w-full backdrop-blur-lg" />
        <MaxWidthWrapper className="max-w-screen-lg pb-20">
          <div className="relative mb-10 rounded-xl bg-white px-4 py-6">
            <h2 className="px-4 font-display text-2xl font-bold text-gray-700">
              Popular Articles
            </h2>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {POPULAR_ARTICLES.map((title) => (
                <HelpArticleLink title={title} />
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {HELP_CATEGORIES.map((category) => (
              <CategoryCard
                key={category.slug}
                href={`/help`}
                name={category.title}
                description={category.description}
                icon={category.icon}
                pattern={{
                  y: 16,
                  squares: [
                    [0, 1],
                    [1, 3],
                  ],
                }}
              />
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default page;
