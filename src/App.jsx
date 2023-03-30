import {
  DigiExpandableFaq,
  DigiExpandableFaqItem,
  DigiInfoCard,
  DigiInfoCardMulti,
  DigiInfoCardMultiContainer,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLinkButton,
  DigiMediaImage,
  DigiTypography
} from "@digi/arbetsformedlingen-react";

import {
  ExpandableFaqVariation,
  InfoCardHeadingLevel,
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockVariation,
  LinkButtonSize,
  LinkButtonVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DigiLayoutContainer afVerticalPadding className="white">
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PROFILE}>
          <div className="one">
            <DigiTypography>
              <DigiTypography afVariation={TypographyVariation.LARGE}>
                <h1>Hej!</h1>
                <p className="bold">
                  Jag heter Mimmi och söker Frontend praktik hos er!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, test link adipiscing elit. Nullam
                  dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
                  iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
                  imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
                  mattis, massa quis luctus fermentum, turpis mi volutpat justo,
                </p>
                <div className="flex buttongroup">
                  <DigiLinkButton
                    afHref="#"
                    afSize={LinkButtonSize.MEDIUM}
                    afVariation={LinkButtonVariation.PRIMARY_ALT}
                    af-hide-icon={true}
                    className="knapp"
                  >
                    Detta är en länk
                  </DigiLinkButton>
                  <DigiLinkButton
                    afHref="#"
                    afSize={LinkButtonSize.MEDIUM}
                    afVariation={LinkButtonVariation.SECONDARY_ALT}
                    af-hide-icon={true}
                  >
                    Här är en länk
                  </DigiLinkButton>
                </div>
              </DigiTypography>
            </DigiTypography>
            <DigiMediaImage
                afUnlazy
                afHeight="330"
                afWidth="330"
                afSrc="https://cdn.discordapp.com/attachments/978099866343440416/1091125463411326996/mim1.png"
                afAlt="teckning på mimmi"
              ></DigiMediaImage>
          </div>
        </DigiLayoutBlock>
        <DigiLayoutContainer afVerticalPadding className="white">
        <DigiInfoCard
              afHeading="Det bästa djuret är katter!"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.TIP}
              afLinkHref="Frivillig länk"
              afLinkText="Frivillig länktext"
              afVariation={InfoCardVariation.PRIMARY}
            >
              <span>Här är lite information om katter. Dom gillar att jaga och leka med garn.  </span>
            </DigiInfoCard>
          <div className="">
            <DigiExpandableFaq
              afHeading="Vanliga frågor"
              afVariation={ExpandableFaqVariation.PRIMARY}
            >
              <DigiExpandableFaqItem afHeading="Vad studerar du?">
                <span>
                  Jag studerar just nu till frontend developer på
                  Medieinstitutet.
                  <digi-icon-comunication-graduate></digi-icon-comunication-graduate>
                </span>
              </DigiExpandableFaqItem>
              <DigiExpandableFaqItem afHeading="När ska du ut på LIA?">
                <p>Jag ska ut på min första LIA i September i år.</p>
              </DigiExpandableFaqItem>
              <DigiExpandableFaqItem afHeading="Vad gillar du att göra?">
                <span>
                  På fritiden gillar jag att teckna och måla, spela spel och
                  skapa mina egna spel.
                </span>
              </DigiExpandableFaqItem>
          
            </DigiExpandableFaq>
          </div>
        </DigiLayoutContainer>

        <DigiInfoCardMultiContainer>
          <DigiInfoCardMulti
            afHeading="Varför ska jag få praktisera?"
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.RELATED}
            afLinkHref="/"
          >
            <span>
              Jag älskar att lära mig nya saker och är öppen för nya tekniker.
            </span>
          </DigiInfoCardMulti>
          <DigiInfoCardMulti
            afHeading="Har jag erfarenhet av att jobba i olika projekt och team ?"
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.RELATED}
            afLinkHref="/"
          >
            <span>Bra på att samarbeta och jobba i olika team!</span>
          </DigiInfoCardMulti>
          <DigiInfoCardMulti
            afHeading="Många personer gillar att koda"
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.RELATED}
            afLinkHref="/"
          >
            <span>
              Varför inte göra det till en karriär?
            </span>
          </DigiInfoCardMulti>
        </DigiInfoCardMultiContainer>
      </DigiLayoutContainer>
    </div>
  );
}

export default App;
