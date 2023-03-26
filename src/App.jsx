import {
  DigiExpandableFaq,
  DigiExpandableFaqItem, DigiInfoCard, DigiInfoCardMulti,
  DigiInfoCardMultiContainer,
  DigiLayoutContainer
} from "@digi/arbetsformedlingen-react";

import {
  ExpandableFaqVariation, InfoCardHeadingLevel, InfoCardMultiHeadingLevel,
  InfoCardMultiType, InfoCardType, InfoCardVariation
} from "@digi/arbetsformedlingen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DigiLayoutContainer afVerticalPadding className="white">
        <h1 className="rubrik">Hej!</h1>
        <div className="flex space">
          <DigiInfoCard
            afHeading="Jag är ett infokort"
            afHeadingLevel={InfoCardHeadingLevel.H2}
            afType={InfoCardType.TIP}
            afLinkHref="Frivillig länk"
            afLinkText="Frivillig länktext"
            afVariation={InfoCardVariation.PRIMARY}
          >
            <p>Jag heter Mimmi och söker Frontend praktik hos er :-D</p>
          </DigiInfoCard>

          
          <DigiExpandableFaq
            afHeading="Vanliga frågor"
            afVariation={ExpandableFaqVariation.PRIMARY}
          >
            <DigiExpandableFaqItem afHeading="Fråga 1">
              <p>
                Svar 1 - Reprehenderit ea nulla dolore non fugiat aute.
                Reprehenderit velit velit non eiusmod. Voluptate commodo
                consectetur ullamco velit minim quis. Reprehenderit consectetur
                nisi officia est fugiat id anim incididunt qui eiusmod.
              </p>
            </DigiExpandableFaqItem>
            <DigiExpandableFaqItem afHeading="Fråga 2">
              <p>
                Svar 2 - In veniam nostrud esse velit velit incididunt ullamco
                non adipisicing. Dolore sint quis aute nostrud. Pariatur commodo
                ullamco dolor nulla ut. Consequat amet velit veniam ipsum
                reprehenderit tempor. Eu labore enim officia anim laboris magna
                eu eu ad. Pariatur voluptate sint nisi ut nulla.
              </p>
            </DigiExpandableFaqItem>
            <DigiExpandableFaqItem afHeading="Fråga 3">
              <p>
                Svar 3 - Officia laboris commodo quis ex nisi cupidatat officia
                dolore est. Ad dolore exercitation sunt deserunt Lorem do esse
                reprehenderit ex non. Proident occaecat elit enim ullamco.
              </p>
            </DigiExpandableFaqItem>
          </DigiExpandableFaq>
        </div>

        <DigiInfoCardMultiContainer>
          <DigiInfoCardMulti
            afHeading="Varför ska jag få praktisera?"
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.RELATED}
            afLinkHref="/"
          >
            <p>
              Jag älskar att lära mig nya saker och är öppen för nya tekniker.
            </p>
          </DigiInfoCardMulti>
          <DigiInfoCardMulti
            afHeading="Har jag erfarenhet av att jobba i olika projekt och team ?"
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.RELATED}
            afLinkHref="/"
          >
            <p>Bra på att samarbeta och jobba i olika team!</p>
          </DigiInfoCardMulti>
          <DigiInfoCardMulti
            afHeading="Vad gör jag på Fritiden?"
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.RELATED}
            afLinkHref="/"
          >
            <p>
              På fritiden gillar jag att skapa spel, teckna, koda och baka
              kakor!
            </p>
          </DigiInfoCardMulti>
        </DigiInfoCardMultiContainer>
      </DigiLayoutContainer>
    </div>
  );
}

export default App;
