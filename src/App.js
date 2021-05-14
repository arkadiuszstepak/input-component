import "./App.css";

import Menu from "./components/Menu";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="StoriesBoard">
        <div className="Title">Inputs</div>
        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Input />"}</div>
            <Input></Input>
          </div>
          <div className="Storie">
            <div className="StorieTitle">{"&:hover"}</div>
            <Input pseudohover></Input>
          </div>
          <div className="Storie">
            <div className="StorieTitle">{"&:focus"}</div>
            <Input pseudofocus></Input>
          </div>
        </div>
        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Input error />"}</div>
            <Input error></Input>
          </div>
          <div className="Storie">
            <div className="StorieTitle">{"&:hover"}</div>
            <Input error pseudohover></Input>
          </div>
          <div className="Storie">
            <div className="StorieTitle">{"&:focus"}</div>
            <Input error pseudofocus></Input>
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Input disabled />"}</div>
            <Input disabled></Input>
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">
              {"<Input helperText=”Some interesting text” />"}
            </div>
            <Input helperText="Some interesting text"></Input>
          </div>
          <div className="Storie">
            <div className="StorieTitle">
              {"<Input helperText=”Some interesting text” error />"}
            </div>
            <Input helperText="Some interesting text" error></Input>
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Input startIcon />"}</div>
            <Input startIcon="local_grocery_store"></Input>
          </div>

          <div className="Storie">
            <div className="StorieTitle">{"<Input endIcon />"}</div>
            <Input endIcon="local_grocery_store"></Input>
          </div>
        </div>
        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Input value=”text” />"}</div>
            <Input value="text"></Input>
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Input size=”sm” />"}</div>
            <Input size="sm"></Input>
          </div>

          <div className="Storie">
            <div className="StorieTitle">{"<Input size=”md” />"}</div>
            <Input size="md"></Input>
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie" style={{ width: "100%" }}>
            <div className="StorieTitle">{"<Input fullWidth />"}</div>
            <Input fullWidth></Input>
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Input multiline row=”4” />"}</div>
            <Input multiline row="4"></Input>
          </div>
        </div>
      </div>
      <div className="SubTitle">
        created by Arkadiusz Stępak - devChallenges.io
      </div>
    </div>
  );
}

export default App;
