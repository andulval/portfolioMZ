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
          Recent <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
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
