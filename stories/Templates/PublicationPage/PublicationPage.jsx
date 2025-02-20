import React, { useEffect } from 'react';
import { PublicationCard } from '../../Molecules/Blocks/PublicationCard/PublicationCard';
import { P } from '../../Atom/BaseTypography/Paragraph/Paragraph';
import { Footer } from '../../Organism/Footer/Footer';
import { Publicationthumb } from '../../Atom/Cards/PublicationThumbnail/PublicationThumbnail';
import { Breadcrumbcomponent } from '../../Components/Navigationcomponents/Breadcrumbs/Breadcrumbs';
import { CtaButton } from '../../Components/UIcomponents/Buttons/CtaButton/CtaButton';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { Menu } from '../../Components/Navigationcomponents/Menu/Menu';
import './publication-page.scss';
import { sticky } from  '../../assets/js/sticky';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';
import { FeaturedContentCard } from '../../Components/UIcomponents/Cards/FeaturedCard/FeaturedContentCard';

export const PublicationPage = ({
  data,
  download,
  readmore,
  image,
  footerData,
  active,
  blockHeader,
  blockDescription,
  paragraphTop1,
  paragraphTop2,
  paragraphTop3,
  buttontype,
  relatedPublicationHeading,
  logo,
  logowhite,
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  locationData,
  langSelect,
  backcaption,
  menuTitle1,
  menuData1,
  menuTitle2,
  menuData2,
  menuTitle3,
  menuData3,
  menuTitle4,
  menuData4,
  FeaturedCardData
}) => {
  useEffect(() => {
    sticky('.sticky','.related-publication', locale);
  }, [locale]);
  return (
  <>
    <GlobalHeader
      backcaption={backcaption}
      locale={locale}
      leftNavigationData={leftNavigationData}
      navigationData={navigationData}
      rightNavigationData={rightNavigationData}
      languageswitcherData={languageswitcherData}
      locationData={locationData}
      langSelect={langSelect}
    />
    <div className="grid-container fluid publication-page">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-12 large-11 large-offset-1 medium-offset-0">
          <div className="column">
            <Breadcrumbcomponent data={data} active={active} />
          </div>
        </div>
      </div>
      <div className="grid-x grid-margin-x publication-block">
        <div className="cell small-12 title-mobile">
          <div className="column">
            <Heading type="2" label={blockHeader} />
          </div>
        </div>
        <div className="cell small-12 large-offset-1 large-4 medium-6 medium-offset-0">
          <div className="column sticky">
            <PublicationCard
              image={image && <Publicationthumb />}
              download={download}
              readmore={readmore}
            />
          </div>
        </div>
        <div className="cell small-12 large-offset-1 large-5 medium-6">
          <div className="column publication-card__title">
            <Heading type="2" label={blockHeader} />
            <Heading type="6" label={blockDescription} />
            <P label={paragraphTop1} className="margin-top-36" />
            <P label={paragraphTop2} />
            <P label={paragraphTop3} />
          </div>
          <div className="column publication-menu">
            <div className="grid-x grid-margin-x">
              <div className="cell small-4 large-3">
                <Heading type="6" label={menuTitle1} />
              </div>
              <div className="cell small-8 large-9">
                <Menu data={menuData1} role="navigation" arialabel="menu-list1" />
              </div>
            </div>
            <div className="grid-x grid-margin-x">
              <div className="cell small-4 large-3">
                <Heading type="6" label={menuTitle2} />
              </div>
              <div className="cell small-8 large-9">
                <Menu data={menuData2} role="navigation" arialabel="menu-list2" />
              </div>
            </div>
            <div className="grid-x grid-margin-x">
              <div className="cell small-4 large-3">
                <Heading type="6" label={menuTitle3} />
              </div>
              <div className="cell small-8 large-9">
                <Menu data={menuData3} role="navigation" arialabel="menu-list3" />
              </div>
            </div>
            <div className="grid-x grid-margin-x">
              <div className="cell small-4 large-3">
                <Heading type="6" label={menuTitle4} />
              </div>
              <div className="cell small-8 large-9">
                <Menu data={menuData4} role="navigation" arialabel="menu-list4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-x grid-margin-x related-publication" data-viewport="true">
        <div className="cell small-12 large-6 large-offset-6 border-top-2">
          <div className="column">
            <Heading type="2" label={relatedPublicationHeading} />
          </div>
        </div>
        <div className="cell small-12 large-6 large-offset-6">
          <div className="column">
            <FeaturedContentCard data={FeaturedCardData} />
          </div>
        </div>
        <div className="cell small-12 large-6 large-offset-6">
          <div className="column margin-top-36">
            <CtaButton label={buttontype} Type="Secondary" />
          </div>
        </div>
      </div>
    </div>
    <Footer
      src={logo}
      srctwo={logowhite}
      headerText={footerData.headerText}
      headerText2={footerData.headerText2}
      style="default"
      alt="UNDP Logo"
      element="input"
      type="email"
      required="required"
      mode="form-email"
      errorText={footerData.errorLabel}
      label={footerData.labelname}
      button={footerData.buttonname}
      placeholder={footerData.placeholdername}
      menutitle={footerData.pageTitle}
      data={footerData.footerdata}
      copyright={footerData.copyright}
      menudata={footerData.menudata}
      {...{ color: 'default' }}
    />
  </>
  );
};
