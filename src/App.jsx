import {
  ButtonSize,
  ButtonVariation, LoaderSpinnerSize
} from "@digi/arbetsformedlingen";
import {
  DigiButton, DigiFormCheckbox, DigiFormFilter, DigiLayoutContainer,
  DigiLoaderSpinner
} from "@digi/arbetsformedlingen-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DigiLayoutContainer afVerticalPadding>
        <h2>hej!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna
          neque, interdum vel massa eget, condimentum rutrum velit. Sed vitae
          ullamcorper sem. Aliquam malesuada nunc sed purus mollis scelerisque.
          Curabitur bibendum leo quis ante porttitor tincidunt. nibh.
        </p>
        <DigiButton
          className="button1"
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.SECONDARY}
          afFullWidth={false}
        >
          Laddar...
          <DigiLoaderSpinner
            afSize={LoaderSpinnerSize.SMALL}
          ></DigiLoaderSpinner>
        </DigiButton>
        <DigiFormFilter
	      afFilterButtonText="Ramverk:"
	      afSubmitButtonText="Filtrera">
	      <DigiFormCheckbox afLabel="Val 1"/>
	      <DigiFormCheckbox afLabel="Val 2"/>
	      <DigiFormCheckbox afLabel="Val 3"/>
        </DigiFormFilter>
      </DigiLayoutContainer>
    </div>
  );
}

export default App;
