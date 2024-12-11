import {
  ColorTags,
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Michał Żądło</GradientText> 👋
        </>
      }
      description={
        <>
        <span style={{ textAlign: 'justify', display: 'block' }}>
        Web Developer with professional experience in e-commerce development, specializing in building and enhancing custom applications.
        Skilled in server setup and backend integrations, with hands-on experience across the entire software development lifecycle.
        Proven track record of contributing to and leading large-scale projects in a multinational environment for global clients.
        </span>
          {/* <span className="text-cyan-400N">
          Web Developer with professional experience in e-commerce development, specializing in building and enhancing custom applications.
          </span>{' '}
          and <span className="text-cyan-400N">4 years of experience</span> as a
          member of <span className="text-cyan-400N">multinational teams</span>.
          <br />
          Responsible for{' '}
          <span className="text-cyan-400N">project execution</span> and{' '}
          <span className="text-cyan-400N">team management</span> for{' '}
          <span className="text-cyan-400N">global clients</span>.
          <br />
          <span className="text-cyan-400N">Master of Science</span> in{' '}
          <span className="text-cyan-400N">Automation and Robotics</span>{' '}
          conferred.
          <br />
          Eager to embrace new development opportunities. */}
          {/* <a className="text-cyan-400N hover:underline" href="/">
            consectetur
          </a>{' '} */}
        </>
      }
      
      // avatar={
      //   <img
      //     className="h-80 w-64 rounded-3xl drop-shadow-[0_10px_10px_#02eeff38]"
      //     src="/assets/images/Michal_small.jpg"
      //     alt="Avatar image"
      //     loading="lazy"
      //   />
      // }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/michal-zadlo">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/@michazado2993">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
          <a href="https://www.github.com/andulval">
            <HeroSocial
              src="/assets/images/github-mark.png"
              alt="github icon"
            />
          </a>
        </>
        }
    />
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', marginTop: '20px'}}>
        <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
        <Tags color={ColorTags.ZINC}>TypeScript</Tags>
        <Tags color={ColorTags.ROSE}>C#</Tags>
        <Tags color={ColorTags.SKY}>SQL</Tags>
        <Tags color={ColorTags.PURPLE}>Bootstrap</Tags>
        <Tags color={ColorTags.LIME}>Sass</Tags>
        <Tags color={ColorTags.AMBER}>HTML</Tags>
        <Tags color={ColorTags.SLATE}>NodeJS</Tags>
        <Tags color={ColorTags.SKY}>ExpressJS</Tags>
        <Tags color={ColorTags.GREEN}>MongoDB </Tags>
        <Tags color={ColorTags.RED}>RESTful</Tags>
        <Tags color={ColorTags.FUCHSIA}>React.js (Hooks & Router)</Tags>
        <Tags color={ColorTags.STONE}>Redux</Tags>
        <Tags color={ColorTags.ORANGE}>Firebase </Tags>
        <Tags color={ColorTags.TEAL}>Stripe API</Tags>
        <Tags color={ColorTags.CYAN}>Context API</Tags>
        <Tags color={ColorTags.INDIGO}>Styled-Components</Tags>
        <Tags color={ColorTags.VIOLET}>Sass</Tags>
        <Tags color={ColorTags.PINK}>React-native</Tags>
        <Tags color={ColorTags.SLATE}>React-navigation</Tags>
        <Tags color={ColorTags.GREEN}>Redux RTK</Tags>
        <Tags color={ColorTags.ROSE}> RTK Query</Tags>
        <Tags color={ColorTags.ORANGE}>MovieDB API</Tags>
        <Tags color={ColorTags.SKY}>ESLint & Prettier</Tags>
        </div>
  </Section>
);

export { Hero };
