import React from "react";
import ProjectSlider from "../components/home/ProjectSlider";
import Manifesto from "../components/home/Manifesto";
import ServicesGrid from "../components/home/ServicesGrid";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ProcessSection from "../components/home/ProcessSection";
import Testimonials from "../components/home/Testimonials";
import QuoteSection from "../components/shared/QuoteSection";
import { useTranslation } from "../translations";
import { useFetch } from "../hooks/useFetch";

const Home: React.FC = () => {
  const { t, language: currentLanguage } = useTranslation();

  const query = `
    *[_type == "homePageContent"]{
      ...,
      featuredProjects[]->{
        id,
        title,
        slug,
        location,
        type,
        year,
        area,
        imageUrl,
        gallery,
        description,
        client,
        status,
        team,
        isFeatured
      }
    }
  `;

  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return null;
  if (error) return <div>Error</div>;

  const homePageContent = data[0];
  const formattedData = {
    projectSlider: homePageContent.heroSection.map((item: any) => ({
      title: item.title[currentLanguage],
      location: item.location[currentLanguage],
      year: item.year,
      imageUrl: item.imageUrl,
    })),
    manifesto: {
      title: homePageContent.metricsTitle[currentLanguage],
      description1: homePageContent.metricsParag1[currentLanguage],
      description2: homePageContent.metricsParag2[currentLanguage],
      metrics: {
        yearsOfExp: homePageContent.yearsOfExp,
        numberOfCountries: homePageContent.numberOfCountries,
        awards: homePageContent.awards,
        completedProjects: homePageContent.completedProjects,
      },
    },
    servicesGrid: {
      title: homePageContent.servicesTitle[currentLanguage],
      subtitle: homePageContent.servicesSubtitle[currentLanguage],
      imageUrl: homePageContent.servicesImg,
    },
    featuredProjects: homePageContent.heroSection.map((item: any) => ({
      title: item.title[currentLanguage],
      location: item.location[currentLanguage],
      year: item.year,
      imageUrl: item.imageUrl,
    })),
    processSection: {
      title: homePageContent.shapingFutureSectionTitle[currentLanguage],
      subtitle: homePageContent.shapingFutureSubtitle[currentLanguage],
      imageUrl: homePageContent.shapingFutureSectionImg,
    },
    testimonials: homePageContent.testimonials.map((item: any) => ({
      text: item.text[currentLanguage],
      author: item.author,
      role: item.role[currentLanguage],
      project: item.project[currentLanguage],
    })),
    quoteSection: {
      quote: homePageContent.quote[currentLanguage],
    },
    projects: {
      projects: homePageContent?.featuredProjects?.map((proj) => ({
        title: proj?.title[currentLanguage],
        slug: proj?.slug?.current,
        location: proj?.location,
        imageUrl: proj?.imageUrl,
      })),
      title: homePageContent?.shapingFutureSectionTitle[currentLanguage],
      subtitle: homePageContent?.shapingFutureSubtitle[currentLanguage],
      imageUrl: homePageContent?.shapingFutureSectionImg,
    },
  };

  return (
    <div>
      <ProjectSlider featuredProjects={formattedData?.projectSlider} />
      <Manifesto manifesto={formattedData?.manifesto} />
      <ServicesGrid servicesGrid={formattedData?.servicesGrid} />
      <FeaturedProjects projects={formattedData?.projects} />
      <ProcessSection processSection={formattedData?.processSection} />
      <Testimonials testimonials={formattedData?.testimonials} />
      <QuoteSection quote={formattedData?.quoteSection?.quote} />
    </div>
  );
};

export default Home;
