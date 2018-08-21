/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('Chicken Kyiv Logos_Transparent background.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="left" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);
const MainPage = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>

        <div className = "tableofcontents">

      <br/>API server for recipe based projects. If you want to have an app or website with recipes, but don't want to spend a lot of time - this can be a good choice.
      <br/>Main Weekly Menu(created and stored by chief) Cloned to user section if user want to add some changes. When user remove recipe, change servings, rearrange recipes order, replace recipe to another - Menu copied to user collection  and weekly menu id updated from Main WM to Cloned WM

        <br/><h3>GL</h3>
            <ul>
              <li>   add </li>
            <li>  created from Main Menu(nothing was changed)</li>
          <li>    created from User Menu (GL not saved to db in this case)</li>
          <li>    if user want to add some products to GL - we create GL related to User Menu for this week</li>
          <li>    when user check ingredient(we assume he buy it) - this ingredient moved to Purchased. Purchased must have this information: qty / Date / notes/ place where it was buyed.</li>
          </ul>
      </div>


  </div>
);
const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Table of contents</h2>
        <div className = "tableofcontents">

          <ul>
  <li><a href="/documentation/docs/features.html">Features</a></li>
  <li><a href="/documentation/docs/tests.html">Tests</a></li>
  <li><a href="/documentation/docs/chickenkyiv-free-menu-release.html">ChickenKyiv Free Menu Release</a></li>
  <li><a href="/documentation/docs/frontend/frontend.html">Frontend</a>
  <ul>
  <li><a href="/documentation/docs/frontend/react-components.html">React Components</a></li>
  <li><a href="/documentation/docs/frontend/releases-plan/releases-plan.html">Releases Plan</a>
  <ul>
  <li><a href="/documentation/docs/frontend/releases-plan/release-0.html">Release #0</a></li>
  <li><a href="/documentation/docs/frontend/releases-plan/release-1.html">Release #1</a></li>
  <li><a href="/documentation/docs/frontend/releases-plan/release-2.html">Release #2</a></li>
  <li><a href="/documentation/docs/frontend/releases-plan/release-3.html">Release #3</a></li>
  <li><a href="/documentation/docs/frontend/releases-plan/release-4.html">Release #4</a></li>
  <li><a href="/documentation/docs/frontend/releases-plan/release-5.html">Release #5</a></li>
  <li><a href="/documentation/docs/frontend/releases-plan/release-6.html">Release #6</a></li>
  <li><a href="/documentation/docs/frontend/releases-plan/release-7.html">Release #7</a></li>
  </ul></li>
  <li><a href="/documentation/docs/recipebox-releases-plan/recipebox-releases-plan.html">RecipeBox Releases Plan</a>
  <ul>
  <li><a href="/documentation/docs/recipebox-releases-plan/release-0.html">Release #0</a></li>
  <li><a href="/documentation/docs/recipebox-releases-plan/release-1.html">Release #1</a></li>
  <li><a href="/documentation/docs/recipebox-releases-plan/release-2.html">Release #2</a></li>
  <li><a href="/documentation/docs/recipebox-releases-plan/release-3.html">Release #3</a></li>
  <li><a href="/documentation/docs/recipebox-releases-plan/release-4.html">Release #4</a></li>
  </ul></li>
  </ul></li>
  <li><a href="/documentation/docs/recipe-api-server-releases-plan/recipe-api-server-releases-plan.html">Recipe API Server Releases Plan</a>
  <ul>
  <li><a href="/documentation/docs/recipe-api-server-releases-plan/release-0.html">Release #0</a></li>
  <li><a href="/documentation/docs/recipe-api-server-releases-plan/release-1.html">Release #1</a></li>
  <li><a href="/documentation/docs/recipe-api-server-releases-plan/release-2.html">Release #2</a></li>
  <li><a href="/documentation/docs/recipe-api-server-releases-plan/release-3.html">Release #3</a></li>
  <li><a href="/documentation/docs/recipe-api-server-releases-plan/release-4.html">Release #4</a></li>
  </ul></li>
  <li><a href="/documentation/docs/chickenkyiv-methods.html">ChickenKyiv Methods</a></li>
  <li><a href="/documentation/docs/database-schemes/database-schemes.html">Database Schemes</a>
  <ul>
  <li><a href="/documentation/docs/database-schemes/foodlog.html">FoodLog</a></li>
  <li><a href="/documentation/docs/database-schemes/recipe-steps.html">Recipe Steps</a></li>
  <li><a href="/documentation/docs/database-schemes/chickenkyiv-schema.html">ChickenKyiv Schema</a></li>
  <li><a href="/documentation/docs/database-schemes/recipe-search-api-schema.html">Recipe Search API Schema</a></li>
  <li><a href="/documentation/docs/database-schemes/shoplist.html">ShopList</a></li>
  </ul></li>
  <li><a href="/documentation/docs/links-new.html">Links New</a></li>
  <li><a href="/documentation/docs/chickenkyiv-homepage-content.html">ChickenKyiv Homepage content</a></li>
  </ul>

      </div>


  </div>
);
const FeatureCallout2 = props => (

  <div className = "ogg" style={{textAlign: 'left'}}>
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
          <div className="blockImage">
            <img src="/recipe-app-react-native/img/54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png">

            </img>
          </div>
          <div className="blockContent"><h2><div><span><p>Description</p>
    </span></div></h2><div><span><p>
        Build with: Angular, Ionic Framework v.1
      <ul>
        <h3>Basic functionality:</h3>
        <li>Screen with recipes list</li>
        <li>Recipe details</li>
        <li>Basic grocery list</li>
        <li>Login screen.</li>
    </ul>



      </p>
    </span></div></div></div>
      </div>
    </div>
  </div>
);
const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Release #1 completed(Free Menu) ^ Build with: Angular, Ionic Framework v.1 Note: soon I’ll redo an app from scratch.',
        image: imgUrl('54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
           {/* <TryOut /> */}

          <MainPage />
          <FeatureCallout />

           {/* <LearnHow /> */}

          {/* <Description />  */}
           {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
