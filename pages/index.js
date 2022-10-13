import ChartCard from "../components/chartCard";
import Likert from "../components/likert";
import Key from "../components/key";

export default function Home() {
  const DF_FF_L_App = {
    stronglyDisagree: 46.2963,
    disagree: 22.222,
    somewhatDisagree: 9.2593,
    neutral: 7.4074,
    somewhatAgree: 7.4074,
    agree: 4.6296,
    stronglyAgree: 2.777,
  };

  const DF_FF_D_App = {
    stronglyDisagree: 21.2963,
    disagree: 8.3333,
    somewhatDisagree: 10.1852,
    neutral: 11.11111,
    somewhatAgree: 20.3704,
    agree: 17.5926,
    stronglyAgree: 11.1111,
  };

  const DF_CO_L_App = {
    stronglyDisagree: 84.2593,
    disagree: 12.037,
    somewhatDisagree: 1.8519,
    neutral: 0.9259,
    somewhatAgree: 0,
    agree: 0.9259,
    stronglyAgree: 0,
  };

  const DF_CO_D_App = {
    stronglyDisagree: 76.8519,
    disagree: 17.5926,
    somewhatDisagree: 2.7778,
    neutral: 2.7778,
    somewhatAgree: 0,
    agree: 0,
    stronglyAgree: 0,
  };

  return (
    <main className="main">
      <h1>Scenario Responses: "The access described is appropriate"</h1>
      <ChartCard>
        <Key />
        <h2>
          A friend/family member accesses digital files without permission
        </h2>
        <Likert blockValues={DF_FF_L_App} label="During life" />
        <Likert blockValues={DF_FF_D_App} label="After death" />
        <h2>
          A company/organisation accesses digital files without permission
        </h2>
        <Likert blockValues={DF_CO_L_App} label="During life" />
        <Likert blockValues={DF_CO_D_App} label="After death" />
      </ChartCard>
    </main>
  );
}
