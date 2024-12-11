import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';
import { Fragment } from 'react';

import ProjectM from './ProjectM.d';

const ProjectList = () => (
  <Fragment>
    <Section
      title={
        <>
          Professional <GradientText>Experience</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
      <ProjectM
          name="Motohurt"
          description="E-commerce application for the automotive industry based on a proprietary CMS."
          link="https://motohurt.org/"
          moreInfoLink="https://motohurt.org/"
          moreInfoLinkDesc="See more"
          img={{
            src: '/assets/images/motohur smt.png',
            alt: 'Proffesional e-commerce website - motohurt',
          }}
          category={
            <>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.ZINC}>TypeScript</Tags>
              <Tags color={ColorTags.ROSE}>C#</Tags>
              <Tags color={ColorTags.SKY}>SQL</Tags>
              <Tags color={ColorTags.PURPLE}>Bootstrap</Tags>
              <Tags color={ColorTags.LIME}>Sass</Tags>
              <Tags color={ColorTags.EMERALD}>HTML</Tags>
            </>
          }
        />
        <ProjectM
          name="ACK"
          description="E-commerce application for the automotive industry based on a proprietary CMS."
          link="https://sklep.ack.com.pl/"
          moreInfoLink="https://sklep.ack.com.pl/"
          moreInfoLinkDesc="See more"
          img={{
            src: '/assets/images/ack.png',
            alt: 'Proffesional e-commerce  website - ACK',
          }}
          category={
            <>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.ZINC}>TypeScript</Tags>
              <Tags color={ColorTags.ROSE}>C#</Tags>
              <Tags color={ColorTags.SKY}>SQL</Tags>
              <Tags color={ColorTags.PURPLE}>Bootstrap</Tags>
              <Tags color={ColorTags.LIME}>Sass</Tags>
              <Tags color={ColorTags.EMERALD}>HTML</Tags>
            </>
          }
        />
        <ProjectM
          name="GKtrading"
          description="E-commerce application for the automotive industry based on a proprietary CMS."
          link="https://sklep.gktrading.pl/"
          moreInfoLink="https://sklep.gktrading.pl/"
          moreInfoLinkDesc="See more"
          img={{
            src: '/assets/images/gktrad sm.png',
            alt: 'Proffesional e-commerce website - GKtrading',
          }}
          category={
            <>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.ROSE}>C#</Tags>
              <Tags color={ColorTags.PURPLE}>Bootstrap</Tags>
              <Tags color={ColorTags.LIME}>Sass</Tags>
              <Tags color={ColorTags.EMERALD}>HTML</Tags>
            </>
          }
        />
      </div>
    </Section>

    <Section
      title={
        <>
          Recent <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
      <ProjectM
          name="Nautours API"
          description="The Nautours API is a RESTful service designed with predictable, resource-oriented URLs, supporting JSON for requests and responses. It provides robust query options, including sorting, field limiting, pagination, and data aggregation, as well as advanced filtering like geo-radius searches using GeoJSON. Standard HTTP response codes, authentication, and HTTP methods ensure secure and intuitive interactions."
          link="https://natorusapi.netlify.app/api/v1/tours?difficulty=easy&price[lt]=1500&sort=price"
          moreInfoLink="https://github.com/andulval/nautorus"
          moreInfoLinkDesc="See more"
          img={{
            src: '/assets/images/restfulAPi.png',
            alt: 'Project Nautorus API',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>NodeJS</Tags>
              <Tags color={ColorTags.LIME}>ExpressJS</Tags>
              <Tags color={ColorTags.YELLOW}>MongoDB </Tags>
              <Tags color={ColorTags.ROSE}>Javascript</Tags>
              <Tags color={ColorTags.EMERALD}>RESTful</Tags>
            </>
          }
        />
        <ProjectM
          name="Crwn-clothing"
          description="Crwn-clothing is an E-commerce application similar to Shopify. Users can register or login (also Google sign-in). Clients can add/remove products to cart and make test payments. All features with a nice user-friendly design and feedback.
"
          link="https://master--chipper-cassata-41e430.netlify.app/"
          moreInfoLink="https://github.com/andulval/crwn-clothing-v2"
          moreInfoLinkDesc="See more"
          img={{
            src: '/assets/images/crw-clothing-img.png',
            alt: 'Project crwn-clothing',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>React.js (Hooks & Router)</Tags>
              <Tags color={ColorTags.LIME}>Redux</Tags>
              <Tags color={ColorTags.YELLOW}>Firebase </Tags>
              <Tags color={ColorTags.ROSE}>Stripe API</Tags>
              <Tags color={ColorTags.PURPLE}>Context API</Tags>
              <Tags color={ColorTags.NEUTRAL}>Styled-Components</Tags>
              <Tags color={ColorTags.EMERALD}>Sass</Tags>
            </>
          }
        />
        <ProjectM
          name="YelpCamp"
          description="YelpCamp is a full-stack responsive website. Users can create and review campgrounds with geocoding. In order to review or create a campground, you must have an account. Registered users can create and review campgrounds with
geocoding."
          moreInfoLink="https://github.com/andulval/Yelpcamp2022_v0/tree/main"
          moreInfoLinkDesc="See more"
          link="https://yelpcamp2022-v0.vercel.app/"
          img={{
            src: '/assets/images/yelpcamp-img.png',
            alt: 'Project Web - YelpCamp',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>Node.js</Tags>
              <Tags color={ColorTags.LIME}>Express.js</Tags>
              <Tags color={ColorTags.SKY}>MongoDB</Tags>
              <Tags color={ColorTags.TEAL}>Responsive Web Design</Tags>
              <Tags color={ColorTags.ROSE}>Bootstrap</Tags>
              <Tags color={ColorTags.PURPLE}>REST</Tags>
              <Tags color={ColorTags.YELLOW}>PassportJS </Tags>
              <Tags color={ColorTags.NEUTRAL}>HTML5</Tags>
              <Tags color={ColorTags.GREEN}>CSS3</Tags>
            </>
          }
        />

        <ProjectM
          name="Movie Search"
          description="Movie Search is a mobile application that connects to a movieDB to search for any movie that matches your query. User can add movie to list of favorites movies.
"
          link="https://github.com/andulval/ReactNativeRecruitmentTask/blob/main/README.md"
          moreInfoLink="https://github.com/andulval/ReactNativeRecruitmentTask/blob/main/README.md"
          moreInfoLinkDesc="See more"
          img={{
            src: '/assets/images/homeMovieSearch.png',
            alt: 'Project Movie Search',
          }}
          category={
            <>
              <Tags color={ColorTags.EMERALD}>React-native</Tags>
              <Tags color={ColorTags.ROSE}>React-navigation</Tags>
              <Tags color={ColorTags.YELLOW}>Typescript</Tags>
              <Tags color={ColorTags.LIME}>Redux RTK</Tags>
              <Tags color={ColorTags.PURPLE}> RTK Query</Tags>
              <Tags color={ColorTags.FUCHSIA}>MovieDB API</Tags>
              <Tags color={ColorTags.NEUTRAL}>ESLint & Prettier</Tags>
            </>
          }
        />
      </div>
    </Section>

    <Section
      title={
        <>
          <GradientText>Other</GradientText> Projects
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <ProjectM
          name="Artificial hand"
          description="Gripper with accurate control system and touch sensors. Hand motion control.
The project included all stages: design, fabrication, programming."
          link="https://youtu.be/UiJgxAP7SsI"
          moreInfoLink="https://youtu.be/UiJgxAP7SsI"
          moreInfoLinkDesc="See more"
          img={{
            src: '/assets/images/reka screen.png',
            alt: 'Artificial hand',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>C</Tags>
              <Tags color={ColorTags.YELLOW}>Problem solving</Tags>
              <Tags color={ColorTags.EMERALD}>3D printing</Tags>
            </>
          }
        />
        <ProjectM
          name="Archy"
          description="A remote-controlled six-legged robot with many adjustment functions and types of movement.
The project included all stages: design, fabrication, programming."
          link="https://youtu.be/qFlGX6CD2iQ"
          moreInfoLink="https://youtu.be/qFlGX6CD2iQ"
          moreInfoLinkDesc="See more"
          img={{
            src: '/assets/images/archy screen.png',
            alt: 'Artificial hand',
          }}
          category={
            <>
              <Tags color={ColorTags.SKY}>Java</Tags>
              <Tags color={ColorTags.FUCHSIA}>C</Tags>
              <Tags color={ColorTags.YELLOW}>Problem solving</Tags>
              <Tags color={ColorTags.EMERALD}>3D printing</Tags>
            </>
          }
        />
      </div>
    </Section>
  </Fragment>
);

export { ProjectList };
